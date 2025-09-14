import { Linkedin, Twitter, Instagram, Facebook } from "lucide-react";

export const FooterSection = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary/30 text-muted-foreground py-6 mt-12 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl flex flex-col gap-6">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left - Title */}
          <h4 className="font-medium text-lg mb-4 md:mb-0">Connect With Me</h4>

          {/* Right - Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/sujan-shrestha-69a361285/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Linkedin />
            </a>
            <a
              href="https://www.facebook.com/suza.an.391"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/_suj.an/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram />
            </a>
            <a href="#" target="_blank" className="hover:text-primary transition-colors">
              <Twitter />
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="text-center border-t border-border pt-4">
          <p className="text-sm">
            <span className="font-semibold text-foreground">Sujan Shrestha</span> | © {year} All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
