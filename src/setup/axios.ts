import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE3MDUzNzIyODUsImV4cCI6MTcwNTQ1ODY4NSwicm9sZXMiOlsiUk9MRV9DT05TVUxUQU5UIiwiUk9MRV9VU0VSIiwiUk9MRV9DTElFTlQiXSwiaWQiOjEyLCJ1c2VyIjp7ImZ1bGxOYW1lIjp7InVrIjoi0J_RgNC40YjQutC-INCf0LXRgtGA0L4g0JLQsNC70LXRgNGW0LnQvtCy0LjRhyIsInJ1Ijoi0J_RgNC40YjQutC-INCf0LXRgtGA0L4g0JLQsNC70LXRgNGW0LnQvtCy0LjRhyIsImVuIjoi0J_RgNC40YjQutC-INCf0LXRgtGA0L4g0JLQsNC70LXRgNGW0LnQvtCy0LjRhyIsInBsIjoi0J_RgNC40YjQutC-INCf0LXRgtGA0L4g0JLQsNC70LXRgNGW0LnQvtCy0LjRhyJ9LCJhdmF0YXIiOiJodHRwczovL2Rldi5tb25paGVhbC5jb20vbWVkaWEvY2FjaGUvcmVzb2x2ZS91c2VyX3RvcF9wYW5lbF9hdmF0YXIvbm9fYXZhdGFyLnN2ZyIsImVtYWlsIjoiY29uc3VsdGFudDEuYWNjb3VudEAxc2VjbWFpbC5jb20ifX0.IyALIKfxxb1qPyZ_xG9CK5I17Jfo2wHnbSMHaglK_nAzcZ-kU1aYsQAwK7BYL44bL7JXYrK07Z95hZZTewp9TvPAlfI43A5edHf2AbdGMsHhaWfG3ZYfa0HaQ-RBi2fBexcJrlp1Nk5c14nnIRD2Jh78o9oaigNFhnzYqoRt9z2RHzNSzne5eeQAAC4zcqxH4KLdp5QlbR9KULdv1zGAICH35u3xzDe02LYrqo53JEjyqkUpLRsjAJO0PwgBLbBay9osjM18_XX7dMeMNyAchy98qUSwlH2huhl5QJeaFTTHJ7Sxvzuef5dVVeZq0vL-k8Bm3XbIhsobGUTKv_GhNxXORxeHavSZMLYUFQMGDpTIDZkDxW4-2jN8vFtd0AMVSW2X4k-29-PyFVFz6AfSZd8vmk8b6CPVU1ibznwND-vnp6V-OwgaH3i9ySbhTHoN0Z7V7bA2zkaNhCzY7FLGsOvU4O6OlTKBhULVnpCdD1i8j5rEOZfecOphSyxjUDSWj7dGfxLyJTTXKFUnrNK9C3SMS0Hs3vXTRcdYbiJ23_Ckt49Gjf7rS9Qr_CnMN55rhkYZkG4vZ9Vp2_42a9q3A9PAPYAI43zlvUeIh16NWgWNfsK7f82EcmvruiqZuJUn7Er1m3X4iR47bbCuXRfdM_FEvdjHV1jJPQ68su9k1FA";

export const instance = axios.create({
  baseURL: "https://dev.moniheal.com",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
