import React, { useRef } from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography, Box, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

// 🎨 Styled components
const DarkTimelineDot = styled(TimelineDot)({
  backgroundColor: "#b18460",
  color: "#fff",
});

const LightConnector = styled(TimelineConnector)({
  backgroundColor: "rgba(255,255,255,0.3)",
  height: 3,
});

const EventTypography = styled(Typography)({
  color: "#fff",
  fontWeight: "bold",
  fontFamily: "Overpass",
});

const TimeTypography = styled(Typography)({
  color: "#b18460",
  fontFamily: "Overpass",
});

const DescriptionTypography = styled(Typography)({
  color: "rgba(255,255,255,0.8)",
  fontFamily: "Overpass",
});

const ScrollButton = styled(IconButton)({
  backgroundColor: "rgba(177, 132, 96, 0.8)",
  color: "#fff",
  "&:hover": {
    backgroundColor: "rgba(177, 132, 96, 1)",
  },
  margin: "8px 0",
  padding: "6px",
});

const Schedule = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 150; // px per click
      scrollRef.current.scrollBy({
        top: direction === "down" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      style={{
        height: "95vh",
        width: "100%",
        background: "transparent",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        position: "relative",
      }}
    >
      {/* Scrollable container */}
      <div
        ref={scrollRef}
        style={{
          width: "80%",
          maxWidth: "600px",
          height: "80%",
          overflowY: "auto",
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "1.5rem 1rem",
          scrollBehavior: "smooth",
        }}
        className="no-scrollbar"
      >
        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <Box
          sx={{
            width: "100%",
            color: "white",
            textAlign: "center",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              mb: 3,
              color: "#b18460",
              fontFamily: "Overpass",
              fontWeight: "bold",
              textShadow: "0px 0px 10px rgba(255,255,255,0.3)",
              textAlign: "center",
              fontSize: { xs: "1.5rem", sm: "2rem", md: "2.2rem" },
            }}
          >
            Event Schedule
          </Typography>

          <Timeline position="alternate">
            {/* Timeline Items */}
            <TimelineItem>
              <TimelineOppositeContent sx={{ display: "block" }}>
                <TimeTypography variant="body2">7:30 am</TimeTypography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <DarkTimelineDot />
                <LightConnector />
              </TimelineSeparator>
              <TimelineContent>
                <EventTypography>Check-in</EventTypography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent sx={{ display: "block" }}>
                <TimeTypography variant="body2">8:30 am</TimeTypography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <DarkTimelineDot />
                <LightConnector />
              </TimelineSeparator>
              <TimelineContent>
                <EventTypography>Opening Ceremony</EventTypography>
                <DescriptionTypography>
                  Opening words from our distinguished guests.
                </DescriptionTypography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent sx={{ display: "block" }}>
                <TimeTypography variant="body2">9:00 am</TimeTypography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <DarkTimelineDot />
                <LightConnector />
              </TimelineSeparator>
              <TimelineContent>
                <EventTypography>Conference 1</EventTypography>
                <DescriptionTypography>
                  DevOps: From Reactive Integration to Proactive Production.
                </DescriptionTypography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent sx={{ display: "block" }}>
                <TimeTypography variant="body2">10:30 am</TimeTypography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <DarkTimelineDot />
                <LightConnector />
              </TimelineSeparator>
              <TimelineContent>
                <EventTypography>Coffee Break</EventTypography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent sx={{ display: "block" }}>
                <TimeTypography variant="body2">2:00 pm</TimeTypography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <DarkTimelineDot />
                <LightConnector />
              </TimelineSeparator>
              <TimelineContent>
                <EventTypography>Workshops</EventTypography>
                <DescriptionTypography>
                  From Code to Production: Automated DevOps Pipeline.
                </DescriptionTypography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent sx={{ display: "block" }}>
                <TimeTypography variant="body2">4:00 pm</TimeTypography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                <DarkTimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <EventTypography>Closing Ceremony</EventTypography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </div>

      {/* Fixed Scroll Buttons */}
      <Box
        sx={{
          position: "absolute",
          right: { xs: "2%", sm: "5%" },
          top: "50%",
          transform: "translateY(-50%)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ScrollButton onClick={() => scroll("up")} sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}>
          <ArrowUpwardIcon />
        </ScrollButton>
        <ScrollButton onClick={() => scroll("down")} sx={{ fontSize: { xs: "1rem", sm: "1.5rem" } }}>
          <ArrowDownwardIcon />
        </ScrollButton>
      </Box>
    </section>
  );
};

export default Schedule;
