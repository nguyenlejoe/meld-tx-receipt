"use client"

import { useRouter } from "next/navigation"
import { Chain } from "@covalenthq/client-sdk"
import { TransactionReceiptView } from "@covalenthq/goldrush-kit"
import { Flex } from "@radix-ui/themes"

import { MELD } from "@/lib/svg"
import { Button } from "@/components/ui/button"

export default function TX({
  params,
}: {
  params: { chain: Chain; tx_hash: string }
}) {
  const router = useRouter()

  return (
    <div className="w-full flex items-center flex-col gap-4 grk-receipt">
      <div className="w-full min-h-[40rem] relative md:w-[50rem]">
        <div className="absolute right-5 top-[3rem]">{MELD}</div>
        <TransactionReceiptView
          chain_name={params.chain}
          tx_hash={params.tx_hash}
        />
      </div>
      <Flex
        className="w-full"
        onClick={() => {
          router.back()
        }}
      >
        <Button>Back</Button>
      </Flex>
    </div>
  )
}
