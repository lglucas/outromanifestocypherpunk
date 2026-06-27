/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    visitor: import('./features/visitor-data/types').ServerVisitorData;
    showTerminal: boolean;
  }
}
