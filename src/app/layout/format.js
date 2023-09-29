import Header from "../components/header"

import Footer from "../components/footer"
import Head from "next/head"
export default function format({children}){

    return(

        <>

        <Head>
            <title>Blog</title>
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
        </>
    )
}