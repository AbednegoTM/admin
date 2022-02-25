import React, { ReactNode } from "react"
import type { Toast } from "react-hot-toast"
import { toast as global } from "react-hot-toast"
import ToasterContainer from "../../atoms/toaster-container"
import CrossIcon from "../../fundamentals/icons/cross-icon"
import XCircleIcon from "../../fundamentals/icons/x-circle-icon"

type SavingStateProps = {
  toast: Toast
  title?: string
  message?: string | ReactNode
}

const ErrorState: React.FC<SavingStateProps> = ({
  toast,
  title = "Error",
  message = "An error occured while trying to save your changes. Please try again.",
}) => {
  const onDismiss = () => {
    global.dismiss(toast.id)
  }

  return (
    <ToasterContainer visible={toast.visible}>
      <div>
        <XCircleIcon size={20} className="text-rose-40" />
      </div>
      <div className="flex flex-col ml-small mr-base gap-y-2xsmall flex-grow">
        <span className="inter-small-semibold">{title}</span>
        <span className="inter-small-regular text-grey-50">{message}</span>
      </div>
      <div>
        <button onClick={onDismiss}>
          <CrossIcon size={20} className="text-grey-40" />
        </button>
        <span className="sr-only">Close</span>
      </div>
    </ToasterContainer>
  )
}

export default ErrorState
