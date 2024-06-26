"use client"

import { Card } from "@repo/ui/card"
import { Button } from "@repo/ui/button"
import { TextInput } from "@repo/ui/textinput"
import { Center } from "@repo/ui/center"
import { useState } from "react"
import { p2pTransfer } from "../app/lib/actions/p2pTranfer"

export function SendCard(){
    const [number, setNumber] = useState("");
    const [amount, setAmount] = useState(0);

    return  <div className="h-[90vh]">
    <Center>
        <Card title="Send">
            <div className="min-w-72 pt-2">
                <TextInput placeholder={"Number"} label="Number" onChange={(value) => {
                    setNumber(value)
                }} />
                <TextInput placeholder={"Amount"} label="Amount" onChange={(value) => {
                    setAmount(Number(value))
                }} />
                <div className="pt-4 flex justify-center">
                    <Button onClick={() => {

                    }}>Send</Button>
                </div>
            </div>
        </Card>
    </Center>
</div>
}