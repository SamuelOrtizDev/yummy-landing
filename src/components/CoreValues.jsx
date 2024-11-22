import { Value1, Value2, Value3, Value4 } from "./Icons";

const values = [
    {
        title: "Convenience",
        text: "Making life easier for users by providing seamless access to goods and services.",
        icon: <Value1/>,
    },
    {
        title: "Reliability",
        text: "Building long-term relationships through dependable service and transparent communication.",
        icon: <Value2/>,
    },
    {
        title: "Simplicity",
        text: "Yummy strives to create designs that are easy to use and minimize cognitive load.",
        icon: <Value3/>,
    },
    {
        title: "Accesible",
        text: "Yummy maintains a cohesive and harmonious visual language across all its products.",
        icon: <Value4/>,
    },
];

export function CoreValues() {
    return (
        <ul className="grid grid-cols-4 gap-12">
            {values.map(({ title, text, icon }) => (
                <li className="flex flex-col items-center text-center p-8 gap-3 rounded-2xl shadow-lg bg-white">
                    <span>
                        {icon}
                    </span>
                    <stron className="font-bold text-2xl">{title}</stron>
                    {text}
                </li>
            ))}
        </ul>
    )
}