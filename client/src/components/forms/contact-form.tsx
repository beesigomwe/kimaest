import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";

type ContactFormData = InsertContact;

export default function ContactForm() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [subject, setSubject] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. We will get back to you soon.",
      });
      reset();
      setSubject("");
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    mutation.mutate({ ...data, subject });
  };

  return (
    <Card className="bg-light-gray">
      <CardContent className="p-8">
        <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="firstName" className="text-foreground font-medium mb-2">
                First Name *
              </Label>
              <Input
                id="firstName"
                {...register("firstName")}
                className="w-full focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
              />
              {errors.firstName && (
                <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
              )}
            </div>
            
            <div>
              <Label htmlFor="lastName" className="text-foreground font-medium mb-2">
                Last Name *
              </Label>
              <Input
                id="lastName"
                {...register("lastName")}
                className="w-full focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
              />
              {errors.lastName && (
                <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="email" className="text-foreground font-medium mb-2">
              Email Address *
            </Label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="w-full focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="phone" className="text-foreground font-medium mb-2">
              Phone Number
            </Label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              className="w-full focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
            />
            {errors.phone && (
              <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="subject" className="text-foreground font-medium mb-2">
              Subject *
            </Label>
            <Select value={subject} onValueChange={setSubject} required>
              <SelectTrigger className="w-full focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="it-services">IT Services</SelectItem>
                <SelectItem value="printer-supplies">Printer Supplies</SelectItem>
                <SelectItem value="hardware">Hardware</SelectItem>
                <SelectItem value="software">Software</SelectItem>
                <SelectItem value="support">Technical Support</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {!subject && errors.subject && (
              <p className="text-destructive text-sm mt-1">Please select a subject</p>
            )}
          </div>

          <div>
            <Label htmlFor="message" className="text-foreground font-medium mb-2">
              Message *
            </Label>
            <Textarea
              id="message"
              rows={5}
              {...register("message")}
              placeholder="Tell us about your requirements..."
              className="w-full focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-vertical"
            />
            {errors.message && (
              <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <Button 
            type="submit" 
            className="w-full btn-primary"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? (
              "Sending..."
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
