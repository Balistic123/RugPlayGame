import { p as push, q as copy_payload, t as assign_payload, a as pop, u as store_get, m as escape_html, l as attr_style, c as bind_props, e as ensure_array_like, d as attr, k as attr_class, o as stringify, v as unsubscribe_stores } from './index3-CthgjPPi.js';
import { B as Button } from './button-Cg_QiDbD.js';
import { I as Input } from './input-BZy6dM-O.js';
import { C as Card } from './card-23nZlDN1.js';
import { C as Card_content } from './card-content-Nxnnhqv4.js';
import { C as Card_description } from './card-description-BhiVZbL9.js';
import { f as formatValue, e as calculateMinesMultiplier, p as playSound, s as showConfetti, h as showSchoolPrideCannons } from './utils2-CLIgW4-x.js';
import { C as Card_header } from './card-header-CuTABeMH.js';
import { C as Card_title } from './card-title-CxxMmziD.js';
import confetti from 'canvas-confetti';
import { a as toast } from './Toaster.svelte_svelte_type_style_lang-CcrnaSIn.js';
import './volume-settings-DX3g8058.js';
import { O as onDestroy } from './scroll-lock-BUIxTk31.js';
import { M as Mode_watcher } from './mode-watcher-Deh9pJeM.js';
import './create-id-Bxd404XN.js';
import { U as USER_DATA } from './user-data-CT5kjyaY.js';
import { P as PORTFOLIO_SUMMARY } from './portfolio-data-D2WCRVa2.js';
import { S as SignInConfirmDialog } from './SignInConfirmDialog-CRywm7vo.js';
import { S as SEO } from './SEO-Cqzi3OcQ.js';
import './index2-D4eROfHK.js';
import './clsx-ChV9xqsO.js';
import './index-opKo-a_0.js';
import './index-server-DH7p7JOq.js';
import './events-CF0F77H5.js';
import './index5-D35Z60w5.js';
import './Icon-DETra0Ze.js';
import 'better-auth/svelte';
import 'better-auth/client/plugins';
import './shared-server-BfUoNEXY.js';
import './index6-BNoyVQ18.js';
import './client2-DLmkXqdH.js';
import './client-s_UYc3Sk.js';
import './exports-Cv9LZeD1.js';
import './dialog-description-4JjLXrIw.js';
import './stores-Be-B7Xuq.js';

function Coinflip($$payload, $$props) {
  push();
  const NEWTON_ITERATIONS = 4;
  const NEWTON_MIN_SLOPE = 1e-3;
  const SUBDIVISION_PRECISION = 1e-7;
  const SUBDIVISION_MAX_ITERATIONS = 10;
  const kSplineTableSize = 11;
  const kSampleStepSize = 1 / (kSplineTableSize - 1);
  const float32ArraySupported = typeof Float32Array === "function";
  function A(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function B(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function C(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
  }
  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    let currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
    return currentT;
  }
  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (let i = 0; i < NEWTON_ITERATIONS; ++i) {
      const currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      const currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  function bezier(mX1, mY1, mX2, mY2) {
    const sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for (let i = 0; i < kSplineTableSize; ++i) {
      sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    }
    function getTForX(aX) {
      let intervalStart = 0;
      let currentSample = 1;
      const lastSample = kSplineTableSize - 1;
      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;
      const dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      const guessForT = intervalStart + dist * kSampleStepSize;
      const initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= NEWTON_MIN_SLOPE) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }
    return function BezierEasing(x) {
      if (x === 0 || x === 1) {
        return x;
      }
      return calcBezier(getTForX(x), mY1, mY2);
    };
  }
  function getNormalizedTimeForProgress(targetProgress, easingFunction, tolerance = 1e-4, maxIterations = 100) {
    if (targetProgress <= 0) return 0;
    if (targetProgress >= 1) return 1;
    let minT = 0;
    let maxT = 1;
    let t = 0.5;
    for (let i = 0; i < maxIterations; i++) {
      const currentProgress = easingFunction(t);
      const error = currentProgress - targetProgress;
      if (Math.abs(error) < tolerance) {
        return t;
      }
      if (error < 0) {
        minT = t;
      } else {
        maxT = t;
      }
      t = (minT + maxT) / 2;
    }
    return t;
  }
  const cssEaseInOut = bezier(0.42, 0, 0.58, 1);
  const MAX_BET_AMOUNT = 1e6;
  let { balance = void 0, onBalanceUpdate } = $$props;
  let betAmount = 10;
  let betAmountDisplay = "10";
  let selectedSide = "heads";
  let isFlipping = false;
  let coinRotation = 0;
  let lastResult = null;
  let activeSoundTimeouts = [];
  let canBet = betAmount > 0 && betAmount <= balance && betAmount <= MAX_BET_AMOUNT && !isFlipping;
  function selectSide(side) {
    if (!isFlipping) {
      selectedSide = side;
    }
  }
  function setBetAmount(amount) {
    const clampedAmount = Math.min(amount, Math.min(balance, MAX_BET_AMOUNT));
    if (clampedAmount >= 0) {
      betAmount = clampedAmount;
      betAmountDisplay = clampedAmount.toLocaleString();
    }
  }
  function handleBetAmountInput(event) {
    const target = event.target;
    const value = target.value.replace(/,/g, "");
    const numValue = parseFloat(value) || 0;
    const clampedValue = Math.min(numValue, Math.min(balance, MAX_BET_AMOUNT));
    betAmount = clampedValue;
    betAmountDisplay = target.value;
  }
  function handleBetAmountBlur() {
    betAmountDisplay = betAmount.toLocaleString();
  }
  async function flipCoin() {
    if (!canBet) return;
    isFlipping = true;
    lastResult = null;
    activeSoundTimeouts.forEach(clearTimeout);
    activeSoundTimeouts = [];
    try {
      const response = await fetch("/api/gambling/coinflip", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ side: selectedSide, amount: betAmount })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to place bet");
      }
      const resultData = await response.json();
      const baseSpinsDegrees = 1800;
      const currentRotationValue = coinRotation;
      let rotationDeltaForThisFlip = baseSpinsDegrees;
      const faceAfterBaseSpins = (currentRotationValue + baseSpinsDegrees) % 360 < 180 ? "heads" : "tails";
      if (faceAfterBaseSpins !== resultData.result) {
        rotationDeltaForThisFlip += 180;
      }
      if (rotationDeltaForThisFlip === 0) {
        rotationDeltaForThisFlip = 360;
      }
      coinRotation = currentRotationValue + rotationDeltaForThisFlip;
      const animationDuration = 2e3;
      if (rotationDeltaForThisFlip >= 180) {
        const numHalfSpins = Math.floor(rotationDeltaForThisFlip / 180);
        for (let i = 1; i <= numHalfSpins; i++) {
          const targetEasedProgress = i * 180 / rotationDeltaForThisFlip;
          const normalizedTime = getNormalizedTimeForProgress(targetEasedProgress, cssEaseInOut);
          const timeToPlaySound = normalizedTime * animationDuration;
          const timeoutId = setTimeout(
            () => {
              playSound("flip");
            },
            timeToPlaySound
          );
          activeSoundTimeouts.push(timeoutId);
        }
      }
      setTimeout(
        () => {
          balance = resultData.newBalance;
          lastResult = resultData;
          onBalanceUpdate?.(resultData.newBalance);
          if (resultData.won) {
            showConfetti(confetti);
          }
          setTimeout(
            () => {
              isFlipping = false;
              if (!resultData.won) {
                playSound("lose");
              }
            },
            500
          );
        },
        animationDuration
      );
    } catch (error) {
      console.error("Coinflip error:", error);
      toast.error("Bet failed", {
        description: error instanceof Error ? error.message : "Unknown error occurred"
      });
      isFlipping = false;
      activeSoundTimeouts.forEach(clearTimeout);
      activeSoundTimeouts = [];
    }
  }
  Card($$payload, {
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Card_title($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Coinflip`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_description($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Choose heads or tails and double your money!`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          $$payload3.out += `<div class="grid grid-cols-1 gap-8 md:grid-cols-2"><div class="flex flex-col space-y-4"><div class="text-center"><p class="text-muted-foreground text-sm">Balance</p> <p class="text-2xl font-bold">${escape_html(formatValue(balance))}</p></div> <div class="flex justify-center"><div class="coin-container svelte-1y4vcqm"><div class="coin svelte-1y4vcqm"${attr_style(`transform: rotateY(${stringify(coinRotation)}deg)`)}><div class="coin-face coin-heads svelte-1y4vcqm"><img src="/facedev/avif/bliptext.avif" alt="Heads" class="h-32 w-32 object-contain"/></div> <div class="coin-face coin-tails svelte-1y4vcqm"><img src="/facedev/avif/wattesigma.avif" alt="Tails" class="h-32 w-32 object-contain"/></div></div></div></div> <div class="flex items-center justify-center text-center">`;
          if (lastResult && !isFlipping) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div class="bg-muted/50 w-full rounded-lg p-3">`;
            if (lastResult.won) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<p class="text-success font-semibold">WIN</p> <p class="text-sm">Won ${escape_html(formatValue(lastResult.payout))} on ${escape_html(lastResult.result)}</p>`;
            } else {
              $$payload3.out += "<!--[!-->";
              $$payload3.out += `<p class="text-destructive font-semibold">LOSS</p> <p class="text-sm">Lost ${escape_html(formatValue(lastResult.amountWagered))} on ${escape_html(lastResult.result)}</p>`;
            }
            $$payload3.out += `<!--]--></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--></div></div> <div class="space-y-4"><div><div class="mb-2 block text-sm font-medium">Choose Side</div> <div class="flex gap-3">`;
          Button($$payload3, {
            variant: selectedSide === "heads" ? "default" : "outline",
            onclick: () => selectSide("heads"),
            disabled: isFlipping,
            class: "side-button h-16 flex-1",
            children: ($$payload4) => {
              $$payload4.out += `<div class="text-center"><img src="/facedev/avif/bliptext.avif" alt="Heads" class="mx-auto mb-1 h-8 w-8 object-contain"/> <div>Heads</div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            variant: selectedSide === "tails" ? "default" : "outline",
            onclick: () => selectSide("tails"),
            disabled: isFlipping,
            class: "side-button h-16 flex-1",
            children: ($$payload4) => {
              $$payload4.out += `<div class="text-center"><img src="/facedev/avif/wattesigma.avif" alt="Tails" class="mx-auto mb-1 h-8 w-8 object-contain"/> <div>Tails</div></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div> <div><label for="bet-amount" class="mb-2 block text-sm font-medium">Bet Amount</label> `;
          Input($$payload3, {
            id: "bet-amount",
            type: "text",
            value: betAmountDisplay,
            oninput: handleBetAmountInput,
            onblur: handleBetAmountBlur,
            disabled: isFlipping,
            placeholder: "Enter bet amount"
          });
          $$payload3.out += `<!----> <p class="text-muted-foreground mt-1 text-xs">Max bet: ${escape_html(MAX_BET_AMOUNT.toLocaleString())}</p></div> <div><div class="grid grid-cols-4 gap-2">`;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance || 0, MAX_BET_AMOUNT) * 0.25)),
            disabled: isFlipping,
            children: ($$payload4) => {
              $$payload4.out += `<!---->25%`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance || 0, MAX_BET_AMOUNT) * 0.5)),
            disabled: isFlipping,
            children: ($$payload4) => {
              $$payload4.out += `<!---->50%`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance || 0, MAX_BET_AMOUNT) * 0.75)),
            disabled: isFlipping,
            children: ($$payload4) => {
              $$payload4.out += `<!---->75%`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance || 0, MAX_BET_AMOUNT))),
            disabled: isFlipping,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Max`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div> `;
          Button($$payload3, {
            class: "h-12 w-full text-lg",
            onclick: flipCoin,
            disabled: !canBet,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(isFlipping ? "Flipping..." : "Flip")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { balance });
  pop();
}
function Slots($$payload, $$props) {
  push();
  let { balance = void 0, onBalanceUpdate } = $$props;
  const symbols = [
    "bliptext",
    "bussin",
    "griddycode",
    "lyntr",
    "subterfuge",
    "twoblade",
    "wattesigma",
    "webx"
  ];
  const BASE_SPINS_PER_REEL = [8, 10, 12];
  const NUM_RENDERED_CYCLES = Math.max(...BASE_SPINS_PER_REEL) + 3;
  const MAX_BET_AMOUNT = 1e6;
  let betAmount = 10;
  let betAmountDisplay = "10";
  let isSpinning = false;
  const createReelStrip = () => {
    const strip = [];
    for (let i = 0; i < 5; i++) {
      const shuffled = [...symbols].sort(() => Math.random() - 0.5);
      strip.push(...shuffled);
    }
    return strip;
  };
  let reelSymbols = [
    createReelStrip(),
    createReelStrip(),
    createReelStrip()
  ];
  let reelPositions = [0, 0, 0];
  let lastResult = null;
  reelSymbols.map((reel_cycle_data) => {
    return reel_cycle_data[1];
  });
  let canBet = betAmount > 0 && betAmount <= balance && betAmount <= MAX_BET_AMOUNT && !isSpinning;
  function setBetAmount(amount) {
    const clampedAmount = Math.min(amount, Math.min(balance, MAX_BET_AMOUNT));
    if (clampedAmount >= 0) {
      betAmount = clampedAmount;
      betAmountDisplay = clampedAmount.toLocaleString();
    }
  }
  function handleBetAmountInput(event) {
    const target = event.target;
    const value = target.value.replace(/,/g, "");
    const numValue = parseFloat(value) || 0;
    const clampedValue = Math.min(numValue, Math.min(balance, MAX_BET_AMOUNT));
    betAmount = clampedValue;
    betAmountDisplay = target.value;
  }
  function handleBetAmountBlur() {
    betAmountDisplay = betAmount.toLocaleString();
  }
  async function spin() {
    if (!canBet) return;
    isSpinning = true;
    lastResult = null;
    playSound("background");
    const spinStartOffsets = [
      Math.random() * 60 - 30,
      Math.random() * 60 - 30,
      Math.random() * 60 - 30
    ];
    reelPositions = reelPositions.map((pos, i) => pos + spinStartOffsets[i]);
    try {
      const response = await fetch("/api/gambling/slots", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: betAmount })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to place bet");
      }
      const result = await response.json();
      const targetIndices = result.symbols.map((symbol, reelIndex) => {
        const indices = reelSymbols[reelIndex].map((s, i) => s === symbol ? i : -1).filter((i) => i !== -1);
        return indices[Math.floor(Math.random() * indices.length)];
      });
      const spinDurations = [2e3, 2500, 3e3];
      targetIndices.forEach((targetIndex, i) => {
        const symbolHeight = 60;
        const targetPosition = 60 - targetIndex * symbolHeight;
        const logicalCyclePixelHeight = reelSymbols[i].length * symbolHeight;
        const fullRotations = BASE_SPINS_PER_REEL[i] * logicalCyclePixelHeight;
        reelPositions[i] = targetPosition - fullRotations;
        setTimeout(
          () => {
            playSound("click");
          },
          spinDurations[i]
        );
      });
      const maxDuration = Math.max(...spinDurations);
      setTimeout(
        () => {
          balance = result.newBalance;
          lastResult = result;
          onBalanceUpdate?.(result.newBalance);
          if (result.won) {
            if (result.winType === "3 OF A KIND") {
              showSchoolPrideCannons(confetti);
              showConfetti(confetti);
            } else {
              showConfetti(confetti);
            }
          } else {
            playSound("lose");
          }
          isSpinning = false;
          reelPositions = reelPositions.map((pos, i) => {
            const symbolHeight = 60;
            const logicalReelCycleLength = reelSymbols[i].length;
            const logicalCyclePixelHeight = logicalReelCycleLength * symbolHeight;
            const normalized = pos % logicalCyclePixelHeight;
            return normalized > 0 ? normalized - logicalCyclePixelHeight : normalized;
          });
        },
        maxDuration + 200
      );
    } catch (error) {
      console.error("Slots error:", error);
      toast.error("Bet failed", {
        description: error instanceof Error ? error.message : "Unknown error occurred"
      });
      isSpinning = false;
    }
  }
  Card($$payload, {
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Card_title($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Slots`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_description($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Match 3 symbols to win big!`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          const each_array = ensure_array_like(reelSymbols);
          $$payload3.out += `<div class="grid grid-cols-1 gap-8 md:grid-cols-2"><div class="flex flex-col space-y-4"><div class="text-center"><p class="text-muted-foreground text-sm">Balance</p> <p class="text-2xl font-bold">${escape_html(formatValue(balance))}</p></div> <div class="slots-machine svelte-afv2hi"><div class="slots-container svelte-afv2hi"><!--[-->`;
          for (let reelIndex = 0, $$length = each_array.length; reelIndex < $$length; reelIndex++) {
            let logicalCycleData = each_array[reelIndex];
            const each_array_1 = ensure_array_like(Array(NUM_RENDERED_CYCLES));
            $$payload3.out += `<div class="reel svelte-afv2hi"><div class="reel-strip svelte-afv2hi"${attr_style(`transform: translateY(${stringify(reelPositions[reelIndex])}px); transition: ${stringify(isSpinning ? `transform ${2 + reelIndex * 0.5}s cubic-bezier(0.17, 0.67, 0.16, 0.99)` : "none")};`)}><!--[-->`;
            for (let cycleInstanceIndex = 0, $$length2 = each_array_1.length; cycleInstanceIndex < $$length2; cycleInstanceIndex++) {
              each_array_1[cycleInstanceIndex];
              const each_array_2 = ensure_array_like(logicalCycleData);
              $$payload3.out += `<!--[-->`;
              for (let symbolIndexInCycle = 0, $$length3 = each_array_2.length; symbolIndexInCycle < $$length3; symbolIndexInCycle++) {
                let symbol = each_array_2[symbolIndexInCycle];
                $$payload3.out += `<div class="symbol svelte-afv2hi"><img${attr("src", `/facedev/avif/${stringify(symbol)}.avif`)}${attr("alt", symbol)} class="symbol-image svelte-afv2hi"/></div>`;
              }
              $$payload3.out += `<!--]-->`;
            }
            $$payload3.out += `<!--]--></div></div>`;
          }
          $$payload3.out += `<!--]--></div> <div class="payline svelte-afv2hi"></div></div> <div class="flex items-center justify-center text-center">`;
          if (lastResult && !isSpinning) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div class="bg-muted/50 w-full rounded-lg p-3">`;
            if (lastResult.won) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<p class="text-success font-semibold">WIN - ${escape_html(lastResult.winType)}</p> <p class="text-sm">Won ${escape_html(formatValue(lastResult.payout))}</p>`;
            } else {
              $$payload3.out += "<!--[!-->";
              $$payload3.out += `<p class="text-destructive font-semibold">NO MATCH</p> <p class="text-sm">Lost ${escape_html(formatValue(lastResult.amountWagered))}</p>`;
            }
            $$payload3.out += `<!--]--></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--></div></div> <div class="space-y-4"><div><div class="mb-2 block text-sm font-medium">Paytable</div> <div class="bg-muted/50 space-y-1 rounded-lg p-3 text-xs"><div class="flex justify-between"><span>3 Same Symbols:</span> <span class="text-success">5x</span></div> <div class="flex justify-between"><span>2 Same Symbols:</span> <span class="text-success">2x</span></div></div></div> <div><label for="bet-amount" class="mb-2 block text-sm font-medium">Bet Amount</label> `;
          Input($$payload3, {
            id: "bet-amount",
            type: "text",
            value: betAmountDisplay,
            oninput: handleBetAmountInput,
            onblur: handleBetAmountBlur,
            disabled: isSpinning,
            placeholder: "Enter bet amount"
          });
          $$payload3.out += `<!----> <p class="text-muted-foreground mt-1 text-xs">Max bet: ${escape_html(MAX_BET_AMOUNT.toLocaleString())}</p></div> <div><div class="grid grid-cols-4 gap-2">`;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance, MAX_BET_AMOUNT) * 0.25)),
            disabled: isSpinning,
            children: ($$payload4) => {
              $$payload4.out += `<!---->25%`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance, MAX_BET_AMOUNT) * 0.5)),
            disabled: isSpinning,
            children: ($$payload4) => {
              $$payload4.out += `<!---->50%`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance, MAX_BET_AMOUNT) * 0.75)),
            disabled: isSpinning,
            children: ($$payload4) => {
              $$payload4.out += `<!---->75%`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance, MAX_BET_AMOUNT))),
            disabled: isSpinning,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Max`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div> `;
          Button($$payload3, {
            class: "h-12 w-full text-lg",
            onclick: spin,
            disabled: !canBet,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(isSpinning ? "Spinning..." : "Spin")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { balance });
  pop();
}
function Mines($$payload, $$props) {
  push();
  const GRID_SIZE = 5;
  const TOTAL_TILES = GRID_SIZE * GRID_SIZE;
  const MAX_BET_AMOUNT = 1e6;
  const MIN_MINES = 3;
  let { balance = void 0, onBalanceUpdate } = $$props;
  let betAmount = 10;
  let betAmountDisplay = "10";
  let mineCount = 3;
  let isPlaying = false;
  let revealedTiles = [];
  let minePositions = [];
  let clickedSafeTiles = [];
  let canBet = betAmount > 0 && betAmount <= balance && betAmount <= MAX_BET_AMOUNT && true;
  function calculateProbability(picks, mines) {
    let probability = 1;
    for (let i = 0; i < picks; i++) {
      probability *= (TOTAL_TILES - mines - i) / (TOTAL_TILES - i);
    }
    return (probability * 100).toFixed(2);
  }
  function setBetAmount(amount) {
    const clamped = Math.min(amount, Math.min(balance, MAX_BET_AMOUNT));
    if (clamped >= 0) {
      betAmount = clamped;
      betAmountDisplay = clamped.toLocaleString();
    }
  }
  function handleBetAmountInput(event) {
    const value = event.target.value.replace(/,/g, "");
    const num = parseFloat(value) || 0;
    const clamped = Math.min(num, Math.min(balance, MAX_BET_AMOUNT));
    betAmount = clamped;
    betAmountDisplay = value;
  }
  function handleBetAmountBlur() {
    betAmountDisplay = betAmount.toLocaleString();
  }
  function resetAutoCashoutTimer() {
  }
  async function startGame() {
    if (!canBet) return;
    toast.error("Mines game temporarily disabled", {
      description: "This feature is currently under maintenance"
    });
    return;
  }
  onDestroy(resetAutoCashoutTimer);
  Card($$payload, {
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Card_title($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Mines`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_description($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Navigate through the minefield and cash out before hitting a mine!`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          const each_array = ensure_array_like(Array(TOTAL_TILES));
          $$payload3.out += `<div class="grid grid-cols-1 gap-8 md:grid-cols-2 svelte-1j4jaet"><div class="flex flex-col space-y-4 svelte-1j4jaet"><div class="text-center svelte-1j4jaet"><p class="text-muted-foreground text-sm svelte-1j4jaet">Balance</p> <p class="text-2xl font-bold svelte-1j4jaet">${escape_html(formatValue(balance))}</p></div> <div${attr_class("mines-grid svelte-1j4jaet", void 0, {
            "pulse-warning": isPlaying
          })}><!--[-->`;
          for (let index = 0, $$length = each_array.length; index < $$length; index++) {
            each_array[index];
            Mode_watcher($$payload3, {});
            $$payload3.out += `<!----> <button${attr_class("mine-tile svelte-1j4jaet", void 0, {
              "revealed": revealedTiles.includes(index),
              "mine": revealedTiles.includes(index) && minePositions.includes(index) && !clickedSafeTiles.includes(index),
              "safe": revealedTiles.includes(index) && !minePositions.includes(index) && clickedSafeTiles.includes(index),
              "light": document.documentElement.classList.contains("light")
            })}${attr("disabled", true, true)} aria-label="Tile">`;
            if (revealedTiles.includes(index)) {
              $$payload3.out += "<!--[-->";
              if (minePositions.includes(index)) {
                $$payload3.out += "<!--[-->";
                $$payload3.out += `<img src="/facedev/avif/bussin.avif" alt="Mine" class="h-8 w-8 object-contain svelte-1j4jaet"/>`;
              } else {
                $$payload3.out += "<!--[!-->";
                $$payload3.out += `<img src="/facedev/avif/twoblade.avif" alt="Safe" class="h-8 w-8 object-contain svelte-1j4jaet"/>`;
              }
              $$payload3.out += `<!--]-->`;
            } else {
              $$payload3.out += "<!--[!-->";
            }
            $$payload3.out += `<!--]--></button>`;
          }
          $$payload3.out += `<!--]--></div></div> <div class="space-y-4 svelte-1j4jaet"><div class="svelte-1j4jaet"><label for="mine-count" class="mb-2 block text-sm font-medium svelte-1j4jaet">Number of Mines</label> <div class="flex items-center gap-2 svelte-1j4jaet">`;
          Button($$payload3, {
            variant: "secondary",
            size: "sm",
            onclick: () => mineCount = Math.max(mineCount - 1, MIN_MINES),
            disabled: mineCount <= MIN_MINES,
            "aria-label": "Decrease mines",
            children: ($$payload4) => {
              $$payload4.out += `<!---->-`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Input($$payload3, {
            id: "mine-count",
            type: "number",
            min: MIN_MINES,
            max: 24,
            value: mineCount,
            oninput: (e) => {
              const target = e.target;
              const val = Math.max(MIN_MINES, Math.min(24, parseInt(target?.value ?? "") || MIN_MINES));
              mineCount = val;
            },
            disabled: isPlaying,
            class: "w-12 text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            variant: "secondary",
            size: "sm",
            onclick: () => mineCount = Math.min(mineCount + 1, 24),
            disabled: mineCount >= 24,
            "aria-label": "Increase mines",
            children: ($$payload4) => {
              $$payload4.out += `<!---->+`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div> <p class="text-muted-foreground mt-1 text-xs svelte-1j4jaet">You will get <span class="text-success font-semibold svelte-1j4jaet">${escape_html(calculateMinesMultiplier(1, mineCount, betAmount).toFixed(2))}x</span> per tile, probability of winning: <span class="text-success font-semibold svelte-1j4jaet">${escape_html(calculateProbability(1, mineCount))}%</span></p> <span class="text-muted-foreground text-xs svelte-1j4jaet">Note: Maximum payout per game is capped at $2,000,000.</span></div> <div class="svelte-1j4jaet"><label for="bet-amount" class="mb-2 block text-sm font-medium svelte-1j4jaet">Bet Amount</label> `;
          Input($$payload3, {
            id: "bet-amount",
            type: "text",
            value: betAmountDisplay,
            oninput: handleBetAmountInput,
            onblur: handleBetAmountBlur,
            disabled: isPlaying,
            placeholder: "Enter bet amount"
          });
          $$payload3.out += `<!----> <p class="text-muted-foreground mt-1 text-xs svelte-1j4jaet">Max bet: ${escape_html(MAX_BET_AMOUNT.toLocaleString())}</p></div> <div class="svelte-1j4jaet"><div class="grid grid-cols-4 gap-2 svelte-1j4jaet">`;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance, MAX_BET_AMOUNT) * 0.25)),
            disabled: isPlaying,
            children: ($$payload4) => {
              $$payload4.out += `<!---->25%`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance, MAX_BET_AMOUNT) * 0.5)),
            disabled: isPlaying,
            children: ($$payload4) => {
              $$payload4.out += `<!---->50%`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance, MAX_BET_AMOUNT) * 0.75)),
            disabled: isPlaying,
            children: ($$payload4) => {
              $$payload4.out += `<!---->75%`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance, MAX_BET_AMOUNT))),
            disabled: isPlaying,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Max`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div> <div class="flex flex-col gap-2 svelte-1j4jaet">`;
          {
            $$payload3.out += "<!--[-->";
            Button($$payload3, {
              class: "h-12 flex-1 text-lg",
              onclick: startGame,
              disabled: !canBet,
              children: ($$payload4) => {
                $$payload4.out += `<!---->Start Game`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { balance });
  pop();
}
function Dice($$payload, $$props) {
  push();
  const MAX_BET_AMOUNT = 1e6;
  const faceRotations = {
    1: { x: 0, y: 0 },
    2: { x: 0, y: 90 },
    3: { x: 90, y: 0 },
    4: { x: -90, y: 0 },
    5: { x: 0, y: -90 },
    6: { x: 0, y: 180 }
  };
  function getFaceRotation(face) {
    return faceRotations[face];
  }
  function getFaceTransform(face) {
    const rotation = getFaceRotation(face);
    return `${getRotate(rotation.x, rotation.y)} translateZ(50px)`;
  }
  function getRotate(x, y, z) {
    const rotateX = x !== void 0 ? `rotateX(${x}deg)` : "";
    const rotateY = y !== void 0 ? `rotateY(${y}deg)` : "";
    const rotateZ = "";
    return `${rotateX} ${rotateY} ${rotateZ}`;
  }
  let { balance = void 0, onBalanceUpdate } = $$props;
  let betAmount = 10;
  let betAmountDisplay = "10";
  let selectedNumber = 1;
  let isRolling = false;
  let lastResult = null;
  let activeSoundTimeouts = [];
  let diceElement = null;
  let canBet = betAmount > 0 && betAmount <= balance && betAmount <= MAX_BET_AMOUNT && !isRolling;
  function selectNumber(num) {
    if (!isRolling) {
      selectedNumber = num;
      playSound("click");
    }
  }
  function setBetAmount(amount) {
    const clampedAmount = Math.min(amount, Math.min(balance, MAX_BET_AMOUNT));
    if (clampedAmount >= 0) {
      betAmount = clampedAmount;
      betAmountDisplay = clampedAmount.toLocaleString();
    }
  }
  function handleBetAmountInput(event) {
    const target = event.target;
    const value = target.value.replace(/,/g, "");
    const numValue = parseFloat(value) || 0;
    const clampedValue = Math.min(numValue, Math.min(balance, MAX_BET_AMOUNT));
    betAmount = clampedValue;
    betAmountDisplay = target.value;
  }
  function handleBetAmountBlur() {
    betAmountDisplay = betAmount.toLocaleString();
  }
  async function rollDice() {
    if (!canBet) return;
    isRolling = true;
    lastResult = null;
    activeSoundTimeouts.forEach(clearTimeout);
    activeSoundTimeouts = [];
    const animationDuration = 1500;
    try {
      const response = await fetch("/api/gambling/dice", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ selectedNumber, amount: betAmount })
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to place bet");
      }
      const resultData = await response.json();
      playSound("dice");
      if (diceElement) ;
      await new Promise((resolve) => setTimeout(resolve, animationDuration));
      await new Promise((resolve) => setTimeout(resolve, 200));
      balance = resultData.newBalance;
      lastResult = resultData;
      onBalanceUpdate?.(resultData.newBalance);
      if (resultData.won) {
        showConfetti(confetti);
        showSchoolPrideCannons(confetti);
      } else {
        playSound("lose");
      }
      isRolling = false;
    } catch (error) {
      console.error("Dice roll error:", error);
      toast.error("Roll failed", {
        description: error instanceof Error ? error.message : "Unknown error occurred"
      });
      isRolling = false;
      activeSoundTimeouts.forEach(clearTimeout);
      activeSoundTimeouts = [];
    }
  }
  Card($$payload, {
    children: ($$payload2) => {
      Card_header($$payload2, {
        children: ($$payload3) => {
          Card_title($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Dice`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Card_description($$payload3, {
            children: ($$payload4) => {
              $$payload4.out += `<!---->Choose a number and roll the dice to win 3x your bet!`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          const each_array = ensure_array_like(Array(6));
          const each_array_2 = ensure_array_like(Array(6));
          $$payload3.out += `<div class="grid grid-cols-1 gap-8 md:grid-cols-2"><div class="flex flex-col space-y-4"><div class="text-center"><p class="text-muted-foreground text-sm">Balance</p> <p class="text-2xl font-bold">${escape_html(formatValue(balance))}</p></div> <div class="flex-1 flex items-center justify-center"><div class="dice-container svelte-9br7ca"><div class="dice svelte-9br7ca"><!--[-->`;
          for (let i = 0, $$length = each_array.length; i < $$length; i++) {
            each_array[i];
            const each_array_1 = ensure_array_like(Array(i + 1));
            $$payload3.out += `<div class="face svelte-9br7ca"${attr_style(`transform: ${stringify(getFaceTransform(i + 1))}`)}><div class="dot-container svelte-9br7ca"><!--[-->`;
            for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
              each_array_1[$$index];
              $$payload3.out += `<div class="dot svelte-9br7ca"></div>`;
            }
            $$payload3.out += `<!--]--></div></div>`;
          }
          $$payload3.out += `<!--]--></div></div></div> <div class="flex items-center justify-center text-center">`;
          if (lastResult && !isRolling) {
            $$payload3.out += "<!--[-->";
            $$payload3.out += `<div class="bg-muted/50 w-full rounded-lg p-3">`;
            if (lastResult.won) {
              $$payload3.out += "<!--[-->";
              $$payload3.out += `<p class="text-success font-semibold">WIN</p> <p class="text-sm">Won ${escape_html(formatValue(lastResult.payout))} on ${escape_html(lastResult.result)}</p>`;
            } else {
              $$payload3.out += "<!--[!-->";
              $$payload3.out += `<p class="text-destructive font-semibold">LOSS</p> <p class="text-sm">Lost ${escape_html(formatValue(lastResult.amountWagered))} on ${escape_html(lastResult.result)}</p>`;
            }
            $$payload3.out += `<!--]--></div>`;
          } else {
            $$payload3.out += "<!--[!-->";
          }
          $$payload3.out += `<!--]--></div></div> <div class="space-y-4"><div><div class="mb-2 block text-sm font-medium">Choose Number</div> <div class="grid grid-cols-3 gap-2"><!--[-->`;
          for (let i = 0, $$length = each_array_2.length; i < $$length; i++) {
            each_array_2[i];
            Button($$payload3, {
              variant: selectedNumber === i + 1 ? "default" : "outline",
              onclick: () => selectNumber(i + 1),
              disabled: isRolling,
              class: "h-16",
              children: ($$payload4) => {
                $$payload4.out += `<!---->${escape_html(i + 1)}`;
              },
              $$slots: { default: true }
            });
          }
          $$payload3.out += `<!--]--></div></div> <div><label for="bet-amount" class="mb-2 block text-sm font-medium">Bet Amount</label> `;
          Input($$payload3, {
            id: "bet-amount",
            type: "text",
            value: betAmountDisplay,
            oninput: handleBetAmountInput,
            onblur: handleBetAmountBlur,
            disabled: isRolling,
            placeholder: "Enter bet amount"
          });
          $$payload3.out += `<!----> <p class="text-muted-foreground mt-1 text-xs">Max bet: ${escape_html(MAX_BET_AMOUNT.toLocaleString())}</p></div> <div><div class="grid grid-cols-4 gap-2">`;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance || 0, MAX_BET_AMOUNT) * 0.25)),
            disabled: isRolling,
            children: ($$payload4) => {
              $$payload4.out += `<!---->25%`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance || 0, MAX_BET_AMOUNT) * 0.5)),
            disabled: isRolling,
            children: ($$payload4) => {
              $$payload4.out += `<!---->50%`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance || 0, MAX_BET_AMOUNT) * 0.75)),
            disabled: isRolling,
            children: ($$payload4) => {
              $$payload4.out += `<!---->75%`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            size: "sm",
            variant: "outline",
            onclick: () => setBetAmount(Math.floor(Math.min(balance || 0, MAX_BET_AMOUNT))),
            disabled: isRolling,
            children: ($$payload4) => {
              $$payload4.out += `<!---->Max`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div> `;
          Button($$payload3, {
            class: "h-12 w-full text-lg",
            onclick: rollDice,
            disabled: !canBet,
            children: ($$payload4) => {
              $$payload4.out += `<!---->${escape_html(isRolling ? "Rolling..." : "Roll")}`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----></div></div>`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  bind_props($$props, { balance });
  pop();
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let shouldSignIn = false;
  let balance = 0;
  let activeGame = "coinflip";
  function handleBalanceUpdate(newBalance) {
    balance = newBalance;
    if (store_get($$store_subs ??= {}, "$PORTFOLIO_SUMMARY", PORTFOLIO_SUMMARY)) {
      PORTFOLIO_SUMMARY.update((data) => data ? {
        ...data,
        baseCurrencyBalance: newBalance,
        totalValue: newBalance + data.totalCoinValue
      } : null);
    }
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    SEO($$payload2, {
      title: "Gambling - Rugplay",
      description: "Play virtual gambling games with simulated currency in Rugplay. Try coinflip, slots, and mines games using virtual money with no real-world value - purely for entertainment.",
      keywords: "virtual gambling simulation, coinflip game, slots game, mines game, virtual casino, simulated gambling, entertainment games"
    });
    $$payload2.out += `<!----> `;
    SignInConfirmDialog($$payload2, {
      get open() {
        return shouldSignIn;
      },
      set open($$value) {
        shouldSignIn = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----> <div class="container mx-auto max-w-4xl p-6"><h1 class="mb-6 text-center text-3xl font-bold">Gambling</h1> `;
    if (!store_get($$store_subs ??= {}, "$USER_DATA", USER_DATA)) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="flex h-96 items-center justify-center"><div class="text-center"><div class="text-muted-foreground mb-4 text-xl">Sign in to start gambling</div> <p class="text-muted-foreground mb-4 text-sm">You need an account to gamble away your life savings</p> `;
      Button($$payload2, {
        onclick: () => shouldSignIn = true,
        children: ($$payload3) => {
          $$payload3.out += `<!---->Sign In`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
      $$payload2.out += `<div class="mb-6 flex justify-center gap-4">`;
      Button($$payload2, {
        variant: activeGame === "coinflip" ? "default" : "outline",
        onclick: () => activeGame = "coinflip",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Coinflip`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        variant: activeGame === "slots" ? "default" : "outline",
        onclick: () => activeGame = "slots",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Slots`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        variant: activeGame === "mines" ? "default" : "outline",
        onclick: () => activeGame = "mines",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Mines`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Button($$payload2, {
        variant: activeGame === "dice" ? "default" : "outline",
        onclick: () => activeGame = "dice",
        children: ($$payload3) => {
          $$payload3.out += `<!---->Dice`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----></div> `;
      if (activeGame === "coinflip") {
        $$payload2.out += "<!--[-->";
        Coinflip($$payload2, {
          onBalanceUpdate: handleBalanceUpdate,
          get balance() {
            return balance;
          },
          set balance($$value) {
            balance = $$value;
            $$settled = false;
          }
        });
      } else if (activeGame === "slots") {
        $$payload2.out += "<!--[1-->";
        Slots($$payload2, {
          onBalanceUpdate: handleBalanceUpdate,
          get balance() {
            return balance;
          },
          set balance($$value) {
            balance = $$value;
            $$settled = false;
          }
        });
      } else if (activeGame === "mines") {
        $$payload2.out += "<!--[2-->";
        Mines($$payload2, {
          onBalanceUpdate: handleBalanceUpdate,
          get balance() {
            return balance;
          },
          set balance($$value) {
            balance = $$value;
            $$settled = false;
          }
        });
      } else if (activeGame === "dice") {
        $$payload2.out += "<!--[3-->";
        Dice($$payload2, {
          onBalanceUpdate: handleBalanceUpdate,
          get balance() {
            return balance;
          },
          set balance($$value) {
            balance = $$value;
            $$settled = false;
          }
        });
      } else {
        $$payload2.out += "<!--[!-->";
      }
      $$payload2.out += `<!--]-->`;
    }
    $$payload2.out += `<!--]--></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CxztRQrl.js.map
