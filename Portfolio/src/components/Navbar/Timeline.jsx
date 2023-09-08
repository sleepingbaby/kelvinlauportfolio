import { Stack, Typography, Box } from "@mui/material";

const TimelineItem = ({ years, title, description, filled, height }) => {
  return (
    <Stack direction="row" minHeight={height ?? 140}>
      <Typography width={120} color="gray">
        {years && `${years.start} - ${years.end}`}
      </Typography>
      <Stack position="relative" gap={2} sx={{ borderLeft: `1px solid black` }}>
        <Box
          width={9}
          height={9}
          borderRadius="50%"
          sx={{
            border: `1px solid black`,
            transform: "translateX(-50%)",
            position: "absolute",
            bgcolor: filled ? "primary.main" : "#fff",
          }}
        />
        <Stack pl={4} spacing={2}>
          {title && (
            <Typography variant={{ xs: "h2", sm: "h5" }} lineHeight="100%">
              {title}
            </Typography>
          )}
          {description && (
            <Typography color="gray" fontSize="1rem">
              {description}
            </Typography>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};

const TimelineComponent = () => {
  return (
    <Stack
      width={600}
      minHeight={400}
      borderRadius={4}
      mt={3}
      p={{ xs: 0, sm: 3 }}
    >
      <TimelineItem filled height={80} />
      <TimelineItem
        years={{ start: 2014, end: "Present" }}
        title="US Air Force"
        description="Avionics Technician"
      />
      <TimelineItem
        years={{ start: 2021, end: 2023 }}
        title="ESO Fund"
        description="Chief of Staff"
      />
      <TimelineItem
        years={{ start: 2016, end: 2020 }}
        title="Thomas Edison State College"
        description="BS Business Administration"
      />
      <TimelineItem filled height={0} />
    </Stack>
  );
};

export default TimelineComponent;
