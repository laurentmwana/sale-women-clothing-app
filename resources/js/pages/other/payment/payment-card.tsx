
import { useState } from "react"
import { format } from "date-fns"
import { ChevronDown, ChevronUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Card as CardType } from "@/types"
import { Moment } from "@/shared/moment"


export const PaymentCard =  ({ card }: { card: CardType }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  return (
    <Card className="overflow-hidden border-t-4 border-t-primary">
      <CardContent className="p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium">#{card.id}</h3>
          <Badge variant={card.buy ? "secondary" : "destructive"} className="rounded-full px-3">
            {card.buy ? "payé" : "pas payé"}
          </Badge>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Client</span>
            <span className="font-medium">{card.client.name}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Montant</span>
            <span className="font-medium">{card.payment.amount.toFixed(2)} Fc</span>
          </div>

          <div className="flex justify-between">
            <span className="text-muted-foreground">Status</span>
            <Badge variant="outline" className="font-normal">
              {card.payment.status}
            </Badge>
          </div>

          <div className="pt-2">
            <Collapsible open={isProductsOpen} onOpenChange={setIsProductsOpen}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm" className="flex w-full justify-between p-0 h-auto">
                  <span className="text-muted-foreground">Products ({card.products.length})</span>
                  {isProductsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="pt-2">
                <ul className="space-y-1 text-sm">
                  {card.products.map((product) => (
                    <li key={product.id} className="flex justify-between items-center py-1">
                      <span>{product.name}</span>
                      <span>${product.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </div>

        <div className="flex justify-between mt-4 pt-3 border-t text-xs text-muted-foreground">
       <Moment date={card.created_at} />
        </div>
      </CardContent>
    </Card>
  )
}

