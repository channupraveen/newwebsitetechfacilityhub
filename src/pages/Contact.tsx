import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    content: "+91 81428 21645",
    href: "tel:+918142821645",
  },
  {
    icon: Mail,
    title: "Email",
    content: " techfacilityhub@gmail.com",
    href: "mailto: techfacilityhub@gmail.com",
  },
  {
    icon: MapPin,
    title: "Office Address",
    content: "TechFacilityHub, Hyderabad, Telangana, India",
  },
  {
    icon: Clock,
    title: "Working Hours",
    content: "Mon–Sat: 9:00 AM – 7:00 PM",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    organization: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      mobile: "",
      organization: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 right-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              Contact Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Get In Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We're here to help you transform your facility into a smart, digital
              powerhouse.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Contact Info */}
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-5 rounded-2xl bg-card border border-border shadow-card"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.title}
                        </h3>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-muted-foreground hover:text-accent transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="p-8 rounded-3xl bg-card border border-border shadow-card">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="mobile"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Mobile Number
                      </label>
                      <Input
                        id="mobile"
                        name="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Organization
                      </label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        required
                        rows={4}
                        className="resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Submitting..."
                      ) : (
                        <>
                          Submit Enquiry
                          <Send className="w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
