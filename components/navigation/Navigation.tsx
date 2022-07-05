import Link from "next/link";
import style from "./Navigation.module.css"
import { MdHome, MdSettings } from "react-icons/md";
export default function Navigation() {
    return (<div className={style.sidebar}>
        <ul>
            <li>
                <Link href="/">
                    <MdHome />
                </Link>
            </li>
            <li>
                <Link href="/settings">
                    <MdSettings />
                </Link>
            </li>
        </ul>
    </div>)
}
