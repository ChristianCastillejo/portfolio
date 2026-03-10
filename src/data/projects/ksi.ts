import { ProjectCaseStudy } from "@/types/project";

export const KSI: ProjectCaseStudy = {
    id: 1,
    slug: "kashmir-shaiva-institute",
    title: "Kashmir Shaiva Institute",
    subtitle: "Multi-Tenant Editorial Platform",
    description: "A multi-domain digital ecosystem built to transform an ancient tradition into a modern experience.",
    tagline: "Translating an ancient tradition into a modern digital experience. By focusing on the organization's unique constraints, I engineered a multi-tenant architecture and a bespoke request-to-order commerce.",
    tags: ["Next.js 16", "Multi-Tenant Edge", "TypeScript", "Contentful CMS", "React Server Components"],
    homeVideo: "/videos/ksi/ksi-home.webm",
    caseVideo: "/videos/ksi/ksi-case.webm",
    techStack: [
        { name: "Next.js 16", iconKey: "globe" },
        { name: "TypeScript", iconKey: "code" },
        { name: "GraphQL", iconKey: "share-2" },
        { name: "Contentful", iconKey: "database" },
        { name: "Tailwind v4", iconKey: "layers" },
        { name: "Radix UI", iconKey: "box" },
        { name: "Framer Motion", iconKey: "wind" },
        { name: "Zustand", iconKey: "droplet" },
        { name: "Resend", iconKey: "mail" },
    ],
    links: {
        live: "https://ksi-plum.vercel.app",
        repo: "https://github.com/christiancastillejo/ksi"
    },
    storySteps: [
        {
            id: 1,
            title: "The Architecture",
            subtitle: "Multi-Tenant Edge Routing",
            description: "The Organization operates across different regional domains. Instead of building isolated apps, I designed a single Next.js codebase. Using Edge Middleware, the server dynamically resolves the tenant based on the URL, serving localized content and themes with zero client-side overhead.",
            visualType: "code",
            codeLanguage: "typescript",
            codeSnippet: `// src/lib/tenant.ts
export type TenantId = "ksi" | "delhi" | "srinagar";

export function getTenant(domain: string | null | undefined): TenantId {
    if (!domain) return "srinagar";
    const normalizedDomain = domain.toLowerCase();

    if (normalizedDomain.includes("kashmirshaivainstitute")) return "ksi";
    if (normalizedDomain.includes("delhi")) return "delhi";
    
    return "srinagar";
}`
        },
        {
            id: 2,
            title: "Performance",
            subtitle: "The Trunk and the Leaves",
            description: "I treat React Server Components as the 'trunk' of a tree—handling heavy tasks like Contentful queries and routing. The ''use client'' directive is reserved strictly for the 'leaves': interactive islands powered by Framer Motion and Zustand. This keeps the JS bundle incredibly lean.",
            visualType: "image",
            visualContent: "/images/projects/ksi/rsc-tree.png",
        },
        {
            id: 3,
            title: "Business Logic",
            subtitle: "E-Commerce by Policy",
            description: "Strict copyright policies meant a standard checkout wasn't legally viable. I designed a bespoke 'Request-to-Order' flow instead (If you want to see a standard Shopify flow, check out my Silvestra case study). Using React 19 Server Actions, the system gracefully bifurcates domestic shipping and international requests, ensuring the architecture adapts to the business reality, not the other way around.",
            visualType: "code",
            codeLanguage: "tsx",
            codeSnippet: `// src/features/cart/CartDrawer.tsx
{destination === "international" ? (
    <div className="p-4 bg-accent/5 border border-accent/20 rounded-md">
        We only ship physical copies within India. For international orders, please visit our global partner.
        <Button asChild">
            <Link href="https://www.lakshmanjooacademy.org/books">Global Partner</Link>
        </Button>
    </div>
) : (
    <Button asChild>
        <Link href="/checkout">Request Order</Link>
    </Button>
)}`
        }
    ],
    architecture: {
        eyebrow: "Data Flow",
        title: "Strictly Typed",
        spanTitle: "Mutations",
        description: "Contentful provides the flexible editorial data, while TypeScript provides the strict guardrails. I integrated GraphQL Codegen to ensure zero runtime errors, pairing it with Zod and Resend for secure, type-safe server mutations.",
        diagramSteps: [
            {
                title: "Contentful CMS",
                subtitle: "Headless Content",
                icon: "Database",
                desc: "Editorial control over philosophy texts and institute data."
            },
            {
                title: "Zustand Store",
                subtitle: "Local Hydration",
                icon: "droplet",
                desc: "Persistent cart state synchronized cleanly on the client."
            },
            {
                title: "Server Actions",
                subtitle: "Next.js 16 Mutations",
                icon: "Zap",
                desc: "Zero-JS form submissions handling the core 'Request' logic."
            },
            {
                title: "Zod & Resend",
                subtitle: "Type-Safe Dispatch",
                icon: "ShieldCheck",
                desc: "Strict runtime validation before securely emailing the organization."
            }
        ],
        codeSnippet: {
            fileName: "actions.ts",
            language: "typescript",
            description: "Server Actions executing request-scoped validation with Zod and handling secure API keys exclusively on the server.",
            code: `"use server";
import { z } from "zod";
import { Resend } from "resend";

export async function submitCheckoutForm(prevState, formData: FormData) {
    const schema = z.object({
        name: z.string().min(2),
        email: z.string().email(),
        cartItems: z.string(),
    });

    const parsed = schema.safeParse(Object.fromEntries(formData));
    if (!parsed.success) return { success: false, errors: parsed.error };

    // Secure server-side email dispatch
    await resend.batch.send([...]);
    return { success: true };
}`
        },
    },
    componentLab: {
        eyebrow: "Design Engineering",
        title: "Editorial",
        spanTitle: "Aesthetics.",
        activeComponent: "hero",
        description: "The UI embraces an editorial, print-inspired aesthetic. I used Tailwind v4 to map contextual color primitives (Saffron, Himalaya, Parchment) into an organic interface, animated with slow, deliberate spring physics."
    },
    standardsHeader: {
        eyebrow: "Engineering Foundations",
        title: "The technical",
        subtitle: "decisions behind the code.",
        description: "When building for an institution with a deep legacy, stability is paramount. I established these core principles to ensure the platform remains robust, maintainable, and respectful to the user."
    },
    standards: [
        {
            title: "Multi-Tenant Edge",
            icon: "Layers",
            description: "Built to scale horizontally. Adding a new regional ashram only requires updating the routing logic, keeping the codebase completely DRY and centralized.",
            highlight: "Edge Computed Routing"
        },
        {
            title: "Business-Driven Logic",
            icon: "ShieldCheck",
            description: "I adapted the engineering to meet strict organizational and legal policies. If you want to see a standard Shopify flow, check out my Silvestra case study.",
            highlight: "Custom Transaction Flow"
        },
        {
            title: "Organic Motion",
            icon: "Wind",
            description: "A purely static page can feel disconnected. I used Framer Motion's spring physics to create a breathing, calm interaction flow that respects the philosophical subject matter.",
            highlight: "60fps Spring Physics"
        },
        {
            title: "Server-First Mentality",
            icon: "Zap",
            description: "By leveraging React 19 Server Components and Server Actions, the client ships almost zero JavaScript for core routing and form submissions.",
            highlight: "Zero-JS Baselines"
        }
    ],
    nextProjectSlug: "silvestra",
    metrics: [
        { label: "Performance", value: "99%", description: "Optimized LCP & CLS" },
        { label: "Best Practices", value: "100%", description: "Lighthouse Audit" }
    ],
    lessons: [
        {
            title: "Constraints breed elegant UI",
            content: "One of the biggest UX challenges here was legal, not technical. Building a robust bifurcation for International vs. Domestic users inside the cart reminded me that engineering is about solving business constraints gracefully, rather than just writing code."
        },
        {
            title: "The Power of the Leaf",
            content: "Pushing state management (Zustand) to the absolute 'leaves' of the component tree prevented hydration bottlenecks, allowing complex layouts to be served as static HTML for blazingly fast performance."
        }
    ],
};