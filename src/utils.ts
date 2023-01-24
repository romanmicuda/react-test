export const failingSleep = () => sleep(true);

export function sleep(fail = false): Promise<void> {
  return new Promise((resolve, reject) =>
    setTimeout(fail ? reject : resolve, 2000)
  );
}
