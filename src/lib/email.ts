import { company } from "@/config/company";

// Build email at runtime to prevent bot harvesting from static HTML
export const email = () => `${company.emailUser}@${company.domain}`;
export const mailto = (params?: string) => `mailto:${email()}${params ? `?${params}` : ""}`;
