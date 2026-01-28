interface StatCardHeaderProps {
    children: React.ReactNode;
}

export const StatCardHeader = ({children}: StatCardHeaderProps) => {
  return (
     <div className="flex justify-between items-center mb-2">
        {children}
      </div>
  )
}
