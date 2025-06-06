import { COMPANY_INFO } from "@/lib/constants";

export default function QuickStats() {
  return (
    <section className="bg-light-gray py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in-up">
            <div className="text-3xl font-bold text-primary mb-2">{COMPANY_INFO.stats.yearsExperience}</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="text-3xl font-bold text-primary mb-2">{COMPANY_INFO.stats.clientsSatisfied}</div>
            <p className="text-muted-foreground">Clients Satisfied</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-3xl font-bold text-primary mb-2">{COMPANY_INFO.stats.projectsCompleted}</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-3xl font-bold text-primary mb-2">{COMPANY_INFO.stats.supportAvailable}</div>
            <p className="text-muted-foreground">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  );
}
