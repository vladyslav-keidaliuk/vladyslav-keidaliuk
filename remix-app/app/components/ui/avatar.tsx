interface AvatarProps {
  initials?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  src?: string;
}

const sizeClasses = {
  sm: 'w-16 h-16',
  md: 'w-24 h-24 md:w-32 md:h-32',
  lg: 'w-32 h-32'
};

const textSizeClasses = {
  sm: 'text-lg',
  md: 'text-2xl md:text-4xl',
  lg: 'text-4xl'
};

export const Avatar = ({ initials, alt, size = 'md', className = '', src }: AvatarProps) => {
  const sizeClass = sizeClasses[size];
  const textSizeClass = textSizeClasses[size];
  
  return (
    <div className="flex justify-center">
      <div className="avatar">
        <div className={`${sizeClass} rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 shadow-2xl ${className}`}>
          {src ? (
            <img 
              src={src} 
              alt={alt}
              className="w-full h-full object-cover rounded-full"
            />
          ) : (
            <div className={`w-full h-full rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold ${textSizeClass}`}>
              {initials}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
