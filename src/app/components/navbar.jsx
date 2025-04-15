import React from 'react';
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-4 py-4 md:px-8 lg:px-16">
      {/* Logo */}
      <div className="flex items-center">
        <div className="text-white text-2xl font-semibold flex items-center">
          <div className="h-8 w-8 bg-green-500 rounded-md flex items-center justify-center mr-2">
            <span className="text-white">U</span>
          </div>
          upgrade
        </div>
      </div>
      
      {/* Desktop navigation */}
      <div className="hidden md:block">
        <NavigationMenu>
          <NavigationMenuList className="gap-6">
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white hover:text-green-300 text-sm font-medium transition-colors">
                Personal Loan
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white hover:text-green-300 text-sm font-medium transition-colors">
                One Card
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white hover:text-green-300 text-sm font-medium transition-colors">
                Savings
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white hover:text-green-300 text-sm font-medium transition-colors">
                Checking
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="text-white hover:text-green-300 text-sm font-medium transition-colors">
                Help
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
      {/* Sign in button */}
      <div>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-800 transition-colors">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Navbar;