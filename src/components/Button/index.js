import { ButtonHTMLAttributes } from "react";
import './index.scss'
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
};

export function Button({isOutlined = false, ...props}: ButtonProps) {
  return (
    <div className="send">
    <button 
    className={`button ${isOutlined ? 'outlined' : ''}`}
    {...props}/>
    </div>
  )
}

