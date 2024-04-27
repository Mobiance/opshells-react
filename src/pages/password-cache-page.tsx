export default function PasswordCachePage() {
  return (
    <div className="grid gap-12 lg:grid-cols-3 lg:gap-0 items-start max-w-7xl px-4 mx-auto py-12">
      <div className="space-y-4 lg:col-span-2">
        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight">Password Cache UI Application</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Easily and securely store and manage your passwords with the Password Cache UI Application.
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Features</h2>
            <p className="text-gray-500 dark:text-gray-400">
              The Password Cache UI Application comes with a range of features to make password management a breeze,
              including:
            </p>
            <ul className="list-disc list-inside grid gap-2 pl-4">
              <li>Intuitive and user-friendly interface</li>
              <li>Secure password storage</li>
              <li>Password generation tool</li>
              <li>Support for multiple devices</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Benefits</h2>
            <p className="text-gray-500 dark:text-gray-400">
              With the Password Cache UI Application, you&apos;ll enjoy the following benefits:
            </p>
            <ul className="list-disc list-inside grid gap-2 pl-4">
              <li>Enhanced security for your passwords</li>
              <li>Convenient access to your password vault</li>
              <li>Ability to create and store complex passwords</li>
              <li>Peace of mind knowing your passwords are safe</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Purpose</h2>
            <p className="text-gray-500 dark:text-gray-400">
              The purpose of the Password Cache UI Application is to provide users with a secure and user-friendly
              solution for managing their passwords. In today&apos;s digital world, individuals are faced with the challenge
              of creating and remembering complex passwords for multiple online accounts. The Password Cache UI
              Application addresses this challenge by allowing users to securely store their passwords in a digital
              vault, eliminating the need to remember multiple login credentials.
            </p>
          </div>
        </div>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center space-y-2">
            <h3 className="text-xl font-bold">Ready to get started?</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Contact us at contactus@opshells.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img
          alt="img"
          className="w-full aspect-video overflow-hidden rounded-xl object-cover"
          height="400"
          src="/password.jpg"
          width="600"
        />
      </div>
    </div>
  )
}


