import http from "./../axios";

export const egGet = (data) =>
  http({
    url: "/test",
    method: "GET",
    // params: data,
  });

export const egPost = (data) =>
  http({
    url: "/test",
    method: "POST",
    // data: data,
  });
