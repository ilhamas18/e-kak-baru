'use client';
import { Inter } from 'next/font/google'
import { useState, useEffect } from "react";
import { Router } from "next/router"
import Layout from '@/components/pages/layout';
import '../components/assets/styles/main.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout></Layout>
    // <html lang="en">
    //   {/*
    //     <head /> will contain the components returned by the nearest parent
    //     head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
    //   */}
    //   <head />
    //   <body>{children}</body>
    // </html>
  )
}
