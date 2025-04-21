import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { insertNewsletterSubscriptionSchema } from "@shared/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";

const formSchema = insertNewsletterSubscriptionSchema.extend({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function NewsletterSignup() {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const { mutate } = useMutation({
    mutationFn: async (data: FormValues) => {
      const res = await apiRequest("POST", "/api/newsletter", data);
      return await res.json();
    },
    onSuccess: () => {
      toast({
        title: "Thank you for subscribing!",
        description: "You have been added to our newsletter.",
      });
      form.reset();
    },
    onError: (error: Error) => {
      toast({
        title: "An error occurred",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <section 
      className="py-16 text-white relative overflow-hidden" 
      style={{ background: "linear-gradient(90deg, #00C4C4 0%, #0047FF 100%)" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p className="text-white/90 max-w-2xl mx-auto font-semibold">
            At Talentfi, we emphasize transparency in our pricing, ensuring you know exactly what you're investing in. We offer a competitive one-time hiring fee along with a flat monthly fee, regardless of the complexity of the role. Discover why businesses—from dynamic startups to leading Fortune 500 companies—choose Talentfi for their hiring needs.
          </p>
        </div>

        <div 
          className="flex flex-col md:flex-row max-w-6xl mx-auto rounded-lg p-8 backdrop-blur-sm border border-white/20"
          style={{ background: "linear-gradient(90deg, rgba(0, 71, 255, 0.2) 0%, rgba(0, 196, 196, 0.2) 100%)" }}
        >
          <div className="md:w-1/3 md:pr-8 flex flex-col justify-center">
            <div className="text-6xl font-bold">$599</div>
            <div className="text-xl mt-2">per employee/month</div>
          </div>

          <div className="space-y-6 md:w-2/3 md:pl-8 md:border-l border-white/30">
            {benefits.map((benefit, index) => {
              const isSubBullet = benefit.startsWith("•");
              
              return (
                <div className={`flex items-center ${isSubBullet ? "ml-10" : ""}`} key={index}>
                  {!isSubBullet && (
                    <div className="bg-white/30 backdrop-blur-sm p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div className="font-semibold">{benefit}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const benefits = [
  "No entity setup required",
  "Seamless onboarding from offer to start",
  "Always-on-time payroll, locally compliant",
  "Once off recruitment fee of 10% of annual package",
  "6-month replacement guarantee",
  "Skills Assessments included in recruitment fee.",
  "Local HR advisors whenever you need them",
  "Remote Work Readiness Training provided free for employee"
];