import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const ApplyForm = () => {
    return (
        <section className="w-full py-12 lg:py-16 xl:py-20">
            <div className="container grid gap-6 px-4 md:grid-cols-2 md:px-6">
                <div className="space-y-4 text-center md:space-y-6 md:text-left">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">Join our team</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            We&apos;re looking for talented individuals who are passionate about building the future of the web.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <Label className="inline" htmlFor="position">
                            Desired position
                        </Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Select a position" />
                            </SelectTrigger>
                            <SelectContent className="w-[180px]">
                                <SelectGroup>
                                    <SelectItem value="Internship">Internship</SelectItem>
                                    <SelectItem value="Flutter Developer">Flutter Developer</SelectItem>
                                    <SelectItem value="Sales Associate">Sales Associate</SelectItem>
                                    <SelectItem value="UI/UX Designer">UI/UX Designer</SelectItem>
                                    <SelectItem value="React JS Developer">React JS Developer</SelectItem>
                                    <SelectItem value="Visual Designer">Visual Designer</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Enter your email" type="email" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone number</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="resume">Upload your resume</Label>
                        <Input accept=".pdf,.doc" id="resume" type="file" />
                    </div>
                    <Button className="w-full">Submit</Button>
                </div>
            </div>
        </section>
    )
}
export default ApplyForm
