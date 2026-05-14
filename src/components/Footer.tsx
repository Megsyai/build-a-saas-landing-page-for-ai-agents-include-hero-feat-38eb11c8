
import { Link } from "react-router-dom";
import { Bot, Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 pt-16 pb-8">
      <div className="container grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2 text-right">
          <div className="flex items-center justify-end gap-2 mb-4">
            <span className="font-bold text-xl">Agentic AI</span>
            <Bot className="h-6 w-6 text-primary" />
          </div>
          <p className="text-muted-foreground max-w-sm ml-auto">
            تمكين الشركات الناشئة والمؤسسات باستخدام وكلاء ذكاء اصطناعي ذوي كفاءة عالية. نحن نبني مستقبل العمل.
          </p>
        </div>
        <div className="text-right">
          <h4 className="font-bold mb-4">روابط سريعة</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">الرئيسية</Link></li>
            <li><Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">الأسعار</Link></li>
            <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">من نحن</Link></li>
          </ul>
        </div>
        <div className="text-right">
          <h4 className="font-bold mb-4">قانوني</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">سياسة الخصوصية</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">شروط الخدمة</a></li>
            <li><a href="#" className="text-sm text-muted-foreground hover:text-primary">اتفاقية SLA</a></li>
          </ul>
        </div>
      </div>
      <div className="container pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div className="flex gap-4">
          <Twitter className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
          <Github className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
          <Linkedin className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
        </div>
        <div>© 2024 Agentic AI. جميع الحقوق محفوظة.</div>
      </div>
    </footer>
  );
};

export default Footer;
