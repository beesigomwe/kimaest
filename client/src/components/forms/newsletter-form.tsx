import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { insertNewsletterSchema, type InsertNewsletter } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

type NewsletterFormData = InsertNewsletter;

export default function NewsletterForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(insertNewsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: NewsletterFormData) => {
      return apiRequest("POST", "/api/newsletter", data);
    },
    onSuccess: () => {
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/newsletter"] });
    },
    onError: (error: any) => {
      toast({
        title: "Subscription failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: NewsletterFormData) => {
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4">
      <Input
        type="email"
        placeholder="Enter your email address"
        {...register("email")}
        className="flex-1 px-4 py-3 rounded-lg text-foreground focus:ring-2 focus:ring-yellow-300 focus:outline-none"
        required
      />
      <Button 
        type="submit" 
        className="bg-yellow-400 text-dark-gray px-6 py-3 rounded-lg hover:bg-yellow-300 transition-colors font-medium"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? "Subscribing..." : "Subscribe"}
      </Button>
    </form>
  );
}
