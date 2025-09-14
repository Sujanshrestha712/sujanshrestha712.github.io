import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {
  const { addToast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger toast immediately on form submission
    addToast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon."
    });

    // Optionally, clear form fields if needed
    e.target.reset();
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p
          className="italic text-lg text-center text-muted-foreground max-w-2xl mx-auto mb-6 font-semibold animate-pulse"
          style={{
            textShadow:
              "0 0 10px rgba(145, 93, 212, 0.7), 0 0 20px rgba(247, 247, 247, 0.8)"
          }}
        >
          Your next big project deserves attention to detail and passion. Get in touch and let’s make it happen.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:shrestha712sujan@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    shrestha712sujan@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+9779849249494" className="text-muted-foreground hover:text-primary transition-colors">
                    +977 9849249494
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Location</h4>
                  <span className="text-muted-foreground hover:text-primary transition-colors">
                    Thimi, Bhaktapur
                  </span>
                </div>
              </div>
            </div>

            
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input type="text" name="name" id="name" required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your Name..."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input type="email" name="email" id="email" required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="XYZ@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea name="message" id="message" required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello I would like to talk about..."
                />
              </div>

              <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
