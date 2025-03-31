"use client"

import { BriefcaseMedicalIcon, Crop, Home} from "lucide-react";

import {
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"



const navItems = [
  {
    title: "Fertilizer Recommendation",
    url: "/fertilizer-recommendation",
    icon: BriefcaseMedicalIcon,
  },
  {
    title: "Crop Recommendation",
    url: "/crop-recommendation",
    icon: Crop,
  },
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
];


export function NavMain() {

  const pathName = usePathname()
  return (
    <SidebarGroup>
      <SidebarMenu>
        {navItems.map((item) => (
            <Link key={item.title} href={item.url} className={cn("rounded-none", 
              pathName === item.url ? 'text-primary bg-primary/5' : 'text-muted-foreground'
            )}>
            <SidebarMenuItem >
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
            </Link>
        ))}
      </SidebarMenu>
    </SidebarGroup> 
  )
}
