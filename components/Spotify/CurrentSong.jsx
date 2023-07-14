import {
  Box,
  Image,
  Link,
  Spinner,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import useSWR from "swr";
import SpotifyLogo from "../../assets/icons/spotify";

export default function CurrentSong() {
  const fetcher = (url) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  console.log(data);

  const titleColor = useColorModeValue("#000", "rgba(255, 255, 255, 0.7)");
  const artistColor = useColorModeValue("#000", "#fff");
  const border = useColorModeValue("#22c35e 1px solid", "#90edb3 1px solid");

  return (
    <Box width="100%">
      {!data ? (
        <Stack align="center" mb={8}>
          <Spinner size="md" speed="0.6s" thickness={3} color="gray.500" />
        </Stack>
      ) : (
        <Stack width="full" mb={data.isPlaying ? 2 : 4} spacing={3}>
          <Stack spacing={2} direction="row" align="center">
            <Text fontWeight="semibold">
              {!data.isPlaying &&
                "Currently sleeping 💤, offline ⚡️ or listening to ads 😭"}
            </Text>
          </Stack>
          {data.isPlaying && (
            <Box
              p={"24px"}
              border={border}
              //   colorScheme="teal"
              borderRadius="20px"
              position="relative"
            >
              <Stack direction="row" spacing={4} align="center">
                <Image
                  alt={`${data.title} album art`}
                  src={data.albumImageUrl}
                  width={14}
                  height={14}
                  objectFit={"cover"}
                  borderRadius="md"
                />
                <Stack spacing={0} overflow="hidden">
                  <Link href={data.songUrl} target="_blank">
                    <Text
                      fontWeight={400}
                      fontSize="16px"
                      color={titleColor}
                      width="full"
                      isTruncated
                    >
                      {data.title}
                    </Text>
                  </Link>
                  <Text
                    color={artistColor}
                    fontSize="18px"
                    fontWeight={500}
                    isTruncated
                  >
                    {data.artist}
                  </Text>
                  <Text></Text>
                </Stack>
              </Stack>
              <Box position="absolute" right="15px" bottom="15px">
                <SpotifyLogo />
              </Box>
            </Box>
          )}
        </Stack>
      )}
    </Box>
  );
}
