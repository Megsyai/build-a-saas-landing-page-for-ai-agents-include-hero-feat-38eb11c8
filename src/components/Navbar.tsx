
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl tracking-tight">Agentic AI</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">ميزاتنا</Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">الأسعار</Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">عن الشركة</Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:flex">تسجيل الدخول</Button>
          <Button>ابدأ مجاناً</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
