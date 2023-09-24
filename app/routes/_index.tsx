import type { MetaFunction } from "@remix-run/node";
import { Logo } from "~/components/Logo";

export const meta: MetaFunction = () => {
    return [
        { title: "Live JSON" },
        {
            name: "description",
            content: "Why copy paste when you can POST ? Keep the flow flowing...",
        },
    ];
};

export default function Index() {
    return (
        <div className='bg-amber-100 w-full min-h-screen'>
            <div>
                <Logo />
            </div>
            <p>foo & bar</p>
        </div>
    );
}
