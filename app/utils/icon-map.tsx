// This file maps icon names to their respective components
import {
  Globe,
  Palette,
  FileText,
  Linkedin,
  Megaphone,
  Users,
  Compass,
  BarChart3,
  Code2,
  Play,
  Presentation,
  LineChart,
  CircleDashed,
  LucideIcon
} from "lucide-react";

// A map of icon names to their components
const iconMap: Record<string, LucideIcon> = {
  Globe,
  Palette,
  FileText,
  Linkedin,
  Megaphone,
  Users,
  Compass,
  BarChart3,
  Code2,
  Play,
  Presentation,
  LineChart
};

// Function to get an icon component by name
export function getIconByName(name: string): LucideIcon {
  return iconMap[name] || CircleDashed;
} 