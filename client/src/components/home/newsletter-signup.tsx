import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
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

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: FormValues) => {
      const response = await apiRequest("POST", "/api/newsletter/subscribe", { 
        email: data.email,
        subscribedAt: new Date()
      });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to subscribe to the newsletter. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    mutate(data);
  };

  return (
    <section className="py-16 bg-[#0047FF] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pricing</h2>
          <p className="mb-8">
            Enter your email to receive our detailed pricing packages and save up to 65% compared to hiring in the USA.
          </p>

          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="flex-1">
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Your email address"
                        {...field}
                        className="py-3 px-4 rounded-md text-[#2d2d2d] focus:outline-none w-full"
                      />
                    </FormControl>
                    <FormMessage className="text-white bg-red-500 bg-opacity-20 mt-1 px-2 py-1 rounded text-sm" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isPending}
                className="bg-[#FF9500] text-white py-3 px-8 rounded-md font-semibold hover:bg-opacity-90 transition"
              >
                {isPending ? "Requesting..." : "Get Pricing"}
              </Button>
            </form>
          </Form>

          <p className="text-sm mt-4 opacity-80">Transparent pricing with no hidden fees. Includes full compliance and payroll services.</p>
        </div>
      </div>
    </section>
  );
}
