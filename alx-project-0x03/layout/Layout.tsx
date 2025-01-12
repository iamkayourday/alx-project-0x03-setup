import { LayoutProps } from "@/interface"; // Updated import

export default function Layout({ children }: LayoutProps) {
  return <div className="layout">{children}</div>;
}
