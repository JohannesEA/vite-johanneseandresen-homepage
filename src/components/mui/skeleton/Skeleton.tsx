import { Skeleton as MuiSkeleton } from "@mui/material";
const Skeleton = () => {
  return (
    <>
      {/* For variant="text", adjust the height via font-size */}
      <MuiSkeleton variant="text" sx={{ fontSize: "1rem" }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <MuiSkeleton variant="circular" width={40} height={40} />
      <MuiSkeleton variant="rectangular" width={210} height={60} />
      <MuiSkeleton variant="rounded" width={210} height={60} />
    </>
  );
};

export default Skeleton;
