import React from 'react'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from './ui/resizable'
import { LoaderCircle } from 'lucide-react'


function RightCol({ input, setInput, output, error, executionTime, loading }) {
    return (
        <>
            <ResizablePanelGroup direction="vertical" className="h-full">

                {/* Input Section */}
                <ResizablePanel defaultSize={40} minSize={20}>
                    <div className="flex flex-col gap-2 bg-gray-800 p-2 h-full border-t border-r border-blue-800">
                        <label htmlFor="input-textarea" className="font-bold text-gray-300">Input</label>
                        <textarea
                            id="input-textarea"
                            className="resize-none bg-gray-900 text-gray-300 p-4 rounded outline-none h-full"
                            placeholder=""
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                    </div>
                </ResizablePanel>

                <ResizableHandle className='bg-blue-800 text-gray-900' withHandle />

                {/* Output Section */}
                <ResizablePanel defaultSize={60} minSize={20}>
                    <div className="flex flex-col gap-2 bg-gray-800 p-2 h-full border-b border-r border-blue-800">
                        <label htmlFor="output-textarea" className="flex justify-between font-bold text-gray-300 gap-1">
                            Output
                            <span className="text-blue-500">
                                {
                                    loading ?
                                        <span><LoaderCircle className="animate-spin" /></span>
                                        :
                                        executionTime
                                }
                            </span>
                        </label>
                        <textarea
                            id="output-textarea"
                            className="resize-none bg-gray-900 text-gray-300 p-4 rounded outline-none h-full overflow-auto"
                            placeholder=""
                            value={output || error}
                            disabled={true}
                        />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </>
    )
}

export default RightCol