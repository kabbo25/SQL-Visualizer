"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

type JoinType = "full" | "inner" | "left" | "right"

export default function SQLVisualizer() {
    const [selectedJoin, setSelectedJoin] = useState<JoinType>("full")
    const [table1, setTable1] = useState("")
    const [table2, setTable2] = useState("")

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-8">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Visualize SQL joins</h1>
                <p className="text-muted-foreground">Type your SQL query and see the results instantly</p>
            </div>

            <div className="space-y-4">
                <div>
                    <h2 className="text-lg font-semibold mb-3">Join type</h2>
                    <div className="flex flex-wrap gap-2">
                        <Button variant={selectedJoin === "full" ? "default" : "outline"} onClick={() => setSelectedJoin("full")}>
                            Full Join
                        </Button>
                        <Button variant={selectedJoin === "inner" ? "default" : "outline"} onClick={() => setSelectedJoin("inner")}>
                            Inner Join
                        </Button>
                        <Button variant={selectedJoin === "left" ? "default" : "outline"} onClick={() => setSelectedJoin("left")}>
                            Left Join
                        </Button>
                        <Button variant={selectedJoin === "right" ? "default" : "outline"} onClick={() => setSelectedJoin("right")}>
                            Right Join
                        </Button>
                    </div>
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-3">Table 1</h2>
                    <Textarea
                        placeholder="Enter table 1 data..."
                        value={table1}
                        onChange={(e) => setTable1(e.target.value)}
                        className="min-h-[150px] font-mono"
                    />
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-3">Table 2</h2>
                    <Textarea
                        placeholder="Enter table 2 data..."
                        value={table2}
                        onChange={(e) => setTable2(e.target.value)}
                        className="min-h-[150px] font-mono"
                    />
                </div>

                <div>
                    <h2 className="text-lg font-semibold mb-3">Results</h2>
                    <Tabs defaultValue="cartesian" className="w-full">
                        <TabsList className="w-full justify-start">
                            <TabsTrigger value="cartesian">Cartesian product</TabsTrigger>
                            <TabsTrigger value="join">Join result</TabsTrigger>
                        </TabsList>
                        <TabsContent value="cartesian" className="min-h-[200px]">
                            <div className="p-4 border rounded-lg min-h-[200px] font-mono">
                                {/* Cartesian product results would go here */}
                            </div>
                        </TabsContent>
                        <TabsContent value="join" className="min-h-[200px]">
                            <div className="p-4 border rounded-lg min-h-[200px] font-mono">{/* Join results would go here */}</div>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

