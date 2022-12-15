import type {NextPage} from "next"
import Image from 'next/image'
import Link from 'next/link'
import {useRouter} from 'next/router'
import React from 'react'
import langStyles from '@/layout/styles/layout.module.scss'
import {NavLangItemsEnum } from '../enums/navEnum'

const Nav: NextPage = () => {
  const router = useRouter()
  const test = router.query
  console.log(test.lang);

  const navNameItems : {value:string, name:string}[] = NavLangItemsEnum.filter(x => x.lang == (test.lang ?? 'default')).map(x => {
    return {value : x.value, name : x.name}
  })

  const navUrlItems  = NavLangItemsEnum.filter(x => x.lang == (test.lang ?? 'default')).reduce((a:{[key:string]:any}, c) => {
    a[c.value] = {name:c.value, url:c.url}
    return a
  }, {})

  return (
      <div className={langStyles.nav}>
        <div className={langStyles.navLayout}>
          <div style={{flexBasis: '100px'}}>
            <Link href="/">
                <div>
                  <Image src="https://raw.githubusercontent.com/vercel/next.js/canary/examples/image-component/public/vercel.png" width={100} height={100} layout={"responsive"} alt={"fragranceia"}/>
                </div>
            </Link>
          </div>
          <div style={{flexBasis: '50%'}}>
            <div className={langStyles.navItem}>
              {navNameItems.map(navNameItem =>
                  <div key={navNameItem.name.toString()} style={{flexBasis: '50%', textAlign: 'center', color:'gray'}}>
                    <Link href={navUrlItems[navNameItem.value].url}>{navNameItem.name}</Link>
                  </div>)}
            </div>
          </div>
        </div>
      </div>
  )
}

export default Nav