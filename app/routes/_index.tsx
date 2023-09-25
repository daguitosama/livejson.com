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
            <div className='mx-auto max-w-[620px] pt-[50px]  flex flex-col gap-[50px] items-center justify-center'>
                <div className='flex flex-col gap-[10px] items-center justify-center'>
                    <Logo />
                    <p>🚧 Build in progress</p>
                </div>
                <p className='text-4xl text-center'>Why copy and paste when you can POST</p>
                <p className='text-center'>
                    An interactive tool to visualize JSON payloads is coming on the way. You will
                    interact by posting data directly from your code and you will see results live
                    here as you post. To keep the flow flowing. Follow{" "}
                    <a
                        href='https://twitter.com/daguitosama'
                        className='text-amber-700 font-medium'
                    >
                        up
                    </a>{" "}
                    for updates
                </p>
            </div>
        </div>
    );
}
