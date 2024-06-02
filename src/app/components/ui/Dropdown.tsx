import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  FileCog,
  Heart,
  Home,
  Newspaper,
  Phone,
  SearchSlash,
} from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/app/components/ui/menubar"


export function DropdownMenuDemo() {
  const navItems = [
    {
      name: "Home",
      href: "/#home",
      logo: <Home className="inline-block h-5" />,
    },
    {
      name: "About",
      href: "/#about",
      logo: <SearchSlash className="inline-block h-5" />,
    },
    {
      name: "Services",
      href: "/#services",
      logo: <FileCog className="inline-block h-5" />,
    },
    {
      name: "Testimonials",
      href: "/#testimonials",
      logo: <Heart className="inline-block h-5" />,
    },
    {
      name: "Contact",
      href: "/#contact",
      logo: <Phone className="inline-block h-5" />,
    },
    {
      name: "Blog",
      href: "/blog",
      logo: <Newspaper className="inline-block h-5" />,
    },
  ];

  return (
    <div className="z-[2000] mx-2">
      <Menubar>
        <MenubarMenu>
        <MenubarTrigger><Menu />
        </MenubarTrigger>
          <MenubarContent className="w-16 mx-4">
            <MenubarSeparator />
              {navItems.map((item: any, i:number) => {
                return (
                  <div key={i}>
                    <MenubarItem>
                    <Link className="text-sm" href={item.href}>
                      {item.name}
                    </Link>
                  </MenubarItem>
                  </div>
                );
              })}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
