export default function StyledImageContainer({
  src,
  otherstyles,
  innerstyles,
}: {
  src?: string;
  otherstyles?: string;
  innerstyles?: string;
}) {
  return (
    <div
      className={`relative ${otherstyles} h-[300px] w-[200px] border-b-2 border-blue-400 overflow-hidden p-4 rounded-[250px]`}
    >
      <div
        className="bg-cover bg-center bg-no-repeat relative p-2 bg-clip-border rounded-[250px] h-full w-full"
        style={{
          background: `linear-gradient(
      to right,
      rgba(17, 102, 177, 0.51) 0%,
      rgba(24, 124, 205, 0.5) 21%,
      rgba(42, 156, 244, 0.51) 42%,
      rgba(42, 156, 244, 0.5) 57%,
      rgba(24, 124, 205, 0.52) 80%,
      rgba(17, 102, 177, 0.49) 100%
    )`,
        }}
      >
        <div
          className={`${innerstyles} h-full w-full rounded-[250px] bg-cover bg-center bg-no-repeat bg-clip-border`}
          style={{ backgroundImage: `url(${src || "/images/Avatar.png"})` }}
        ></div>
      </div>
    </div>
  );
}

export function StyledLogoContainer({
  src,
  otherstyles,
  innerstyles,
  bgStyles,
}: {
  src?: string;
  otherstyles?: string;
  innerstyles?: string;
  bgStyles?: string;
}) {
  return (
    <div
      className={`relative ${otherstyles} border-b-2 border-blue-400 overflow-hidden p-2.5 rounded-[250px]`}
    >
      <div
        className={`h-full w-full ${bgStyles} p-1 rounded-[250px] bg-cover bg-center bg-no-repeat bg-clip-border relative`}
      >
        <div
          className={`${innerstyles} h-full w-full rounded-[250px] bg-white bg-cover bg-center bg-no-repeat bg-clip-border`}
          style={{ backgroundImage: `url(${src || "/images/Avatar.png"})` }}
        ></div>
      </div>
    </div>
  );
}
