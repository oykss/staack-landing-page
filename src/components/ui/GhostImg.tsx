import logo from '../../assets/logo.svg';

type TGhostImgProps = {
  width?: number;
  height?: number;
  className?: string;
};

export default function GhostImg({
  width = 25,
  height = 27,
  className,
}: TGhostImgProps) {
  return (
    <img
      src={logo}
      alt='Ghost'
      width={width}
      height={height}
      className={className}
    />
  );
}
