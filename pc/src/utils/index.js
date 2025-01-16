let lock = 0;
export const iosButtonEvent = async () => {
  if (lock) {
  } else {
    await fbq("trackCustom", "iOSbutton");
    lock = 1;
  }
};
