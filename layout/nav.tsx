import type {NextPage} from 'next'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import langStyles from '@/layout/styles/layout.module.scss'
import NavItemsLang from '../enums/layoutEnum'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState} from '../store'
import Dropdown from '../components/dropdown/Dropdown'
import ManyLang from '../enums/manyLang';
import {useRouter} from 'next/router'


const Nav: NextPage = () => {
    const customUseSelector: TypedUseSelectorHook<RootState> = useSelector
    const lang = customUseSelector(state => state.lang.lang)
    const navItems = NavItemsLang.NavItemsLang.filter(x => x.lang == (lang ?? 'default'))
    const navItemsLang = navItems.reduce((a: { [key: string]: any }, c) => {
        a[c.key] = {name: c.value, url: c.url}
        return a
    }, {})
    const dispatch = useDispatch()
    const router = useRouter();

    const home = () => {
        if (lang == 'default') {
            router.push(`/`)
        } else {
            router.push(`/${lang}`)
        }
    }

    return (
        <div className={langStyles.nav}>
            <div className={langStyles.navLayout}>
                <div style={{flexBasis: '100px'}}>
                    <div onClick={home} style={{cursor: 'pointer'}}>
                        <Image
                            src='https://raw.githubusercontent.com/vercel/next.js/canary/examples/image-component/public/vercel.png'
                            width={100} height={100} layout={'responsive'} alt={'fragranceia'}/>
                    </div>
                </div>
                <div style={{flexBasis: '50%'}}>
                    <div className={langStyles.navItem}>
                        {navItems.map((item) =>
                            <div key={item.key.toString()}
                                 style={{flexBasis: '50%', textAlign: 'center', color: 'gray'}}>
                                <Link href={navItemsLang[item.key].url}>{item.value}</Link>
                            </div>)}
                    </div>
                </div>
                <div>
                    <Dropdown lang={ManyLang}/>
                </div>
            </div>
        </div>
    )
}

export default Nav