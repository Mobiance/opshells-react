import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="container grid max-w-3xl gap-6 px-4 md:px-6 pb-12 space-y-4">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Contact us</h2>
        <p className="text-gray-500 dark:text-gray-400">
          Please fill out the form below and we&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="first-name">First name</Label>
            <Input id="first-name" placeholder="Enter your first name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="last-name">Last name</Label>
            <Input id="last-name" placeholder="Enter your last name" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="Enter your email" type="email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea className="min-h-[100px]" id="message" placeholder="Enter your message" />
        </div>
        <Button>Send message</Button>
      </div>
      <div className="space-y-2">
        <h3 className="text-2xl font-bold">Contact information</h3>
        <div className="space-y-2">
          <p className="font-medium">Email</p>
          <p>contactus@opshells.com</p>
        </div>
      </div>
    </div>
  )
}


