export default function RedHeader(props: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center mb-6">
      <div className="container flex items-center gap-4">
        <div className="bg-[#DB4444] w-5 h-10 rounded-sm"></div>
        <div className="font-semibold text-[#DB4444] font-[Inter]">{props.children}</div>
      </div>
    </div>
  );
}
