import { Activity, BadgeCheck, Ban, BarChart3, Bell, BookOpen, Briefcase, Calendar, Camera, Car, Check, Clock, Cloud, Eye, FileText, Gift, Globe, GraduationCap, Heart, Home, Key, LayoutDashboard, Leaf, Lock, Mail, MapPin, MessageCircle, Monitor, Music, Palette, PawPrint, Phone, Scissors, Settings, Shield, Sparkles, Star, Stethoscope, Sun, Target, Truck, Users, Utensils, Wallet, Wrench, Zap, type LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  "check": Check,
  "star": Star,
  "shield": Shield,
  "clock": Clock,
  "heart": Heart,
  "phone": Phone,
  "map-pin": MapPin,
  "map": MapPin,
  "calendar": Calendar,
  "users": Users,
  "chart": BarChart3,
  "zap": Zap,
  "leaf": Leaf,
  "home": Home,
  "car": Car,
  "scissors": Scissors,
  "camera": Camera,
  "book": BookOpen,
  "briefcase": Briefcase,
  "wallet": Wallet,
  "paw": PawPrint,
  "sun": Sun,
  "mail": Mail,
  "gift": Gift,
  "utensils": Utensils,
  "stethoscope": Stethoscope,
  "graduation": GraduationCap,
  "sparkles": Sparkles,
  "truck": Truck,
  "key": Key,
  "wrench": Wrench,
  "palette": Palette,
  "music": Music,
  "message": MessageCircle,
  "badge": BadgeCheck,
  "lock": Lock,
  "globe": Globe,
  "monitor": Monitor,
  "activity": Activity,
  "ban": Ban,
  "file": FileText,
  "layout": LayoutDashboard,
  "target": Target,
  "bell": Bell,
  "settings": Settings,
  "cloud": Cloud,
  "eye": Eye,
};

/** A template's icon by its name; an emoji as it is; anything else a check — never the name's letters. */
export function Icon({ name, className }: { name?: string; className?: string }) {
  if (!name) return null;
  const Cmp = Object.hasOwn(ICONS, name) ? ICONS[name] : undefined;
  if (Cmp) return <Cmp className={className} strokeWidth={1.75} aria-hidden="true" />;
  if (/\p{Extended_Pictographic}/u.test(name)) return <span aria-hidden="true">{name}</span>;
  return <Check className={className} strokeWidth={1.75} aria-hidden="true" />;
}
