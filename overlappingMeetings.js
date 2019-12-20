function mergeRanges(meetings) {
  // Merge overlapping meeting time reanges into one entry

  // appraoch:
  // sort the object by startTime so that the meetings are in an order
  // for each range in the meetings arraay
  // see if the next item has a  start time that is less than or equal to this end time
  // if so combine by using splice to update the two entries in the object
  // the lowest start time should be the start time
  // theh highest end time should be the end time
  // then decrement the counter :tada:

  meetings = meetings.sort((a, b) => a.startTime - b.startTime);

  var i;

  for (i = 0; i < meetings.length - 1; i++) {
    thisEndTime = meetings[i].endTime;
    thisStartTime = meetings[i].startTime;
    nextStartTime = meetings[i + 1].startTime;
    nextEndTime = meetings[i + 1].endTime;

    if (thisEndTime >= nextStartTime) {
      const startTime =
        thisStartTime < nextStartTime ? thisStartTime : nextStartTime; // returns the earlier start time
      const endTime = thisEndTime > nextEndTime ? thisEndTime : nextEndTime; // returns the later end time
      meetings.splice(i, 2, { startTime, endTime });

      i--;
    }
  }
  return meetings;
}

// Tests

// let desc = "meetings overlap";
// let actual = mergeRanges([
//   { startTime: 1, endTime: 3 },
//   { startTime: 2, endTime: 4 }
// ]);
// let expected = [{ startTime: 1, endTime: 4 }];
// assertArrayEquals(actual, expected, desc);

// desc = "meetings touch";
// actual = mergeRanges([
//   { startTime: 5, endTime: 6 },
//   { startTime: 6, endTime: 8 }
// ]);
// expected = [{ startTime: 5, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = "meeting contains other meeting";
// actual = mergeRanges([
//   { startTime: 1, endTime: 8 },
//   { startTime: 2, endTime: 5 }
// ]);
// expected = [{ startTime: 1, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = "meetings stay separate";
// actual = mergeRanges([
//   { startTime: 1, endTime: 3 },
//   { startTime: 4, endTime: 8 }
// ]);
// expected = [{ startTime: 1, endTime: 3 }, { startTime: 4, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = "multiple merged meetings";
// actual = mergeRanges([
//   { startTime: 1, endTime: 4 },
//   { startTime: 2, endTime: 5 },
//   { startTime: 5, endTime: 8 }
// ]);
// expected = [{ startTime: 1, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = "meetings not sorted";
// actual = mergeRanges([
//   { startTime: 5, endTime: 8 },
//   { startTime: 1, endTime: 4 },
//   { startTime: 6, endTime: 8 }
// ]);
// expected = [{ startTime: 1, endTime: 4 }, { startTime: 5, endTime: 8 }];
// assertArrayEquals(actual, expected, desc);

// desc = "oneLongMeetingContainsSmallerMeetings";
// actual = mergeRanges([
//   { startTime: 1, endTime: 10 },
//   { startTime: 2, endTime: 5 },
//   { startTime: 6, endTime: 8 },
//   { startTime: 9, endTime: 10 },
//   { startTime: 10, endTime: 12 }
// ]);
// expected = [{ startTime: 1, endTime: 12 }];
// assertArrayEquals(actual, expected, desc);

// desc = "sample input";
// actual = mergeRanges([
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 10 }
// ]);
// expected = [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 }
// ];
// assertArrayEquals(actual, expected, desc);

// function assertArrayEquals(a, b, desc) {
//   // Sort the keys in each meeting to avoid
//   // failing based on differences in key order.
//   orderedA = a.map(function(meeting) {
//     return JSON.stringify(meeting, Object.keys(meeting).sort());
//   });
//   orderedB = b.map(function(meeting) {
//     return JSON.stringify(meeting, Object.keys(meeting).sort());
//   });
//   const arrayA = JSON.stringify(orderedA);
//   const arrayB = JSON.stringify(orderedB);
//   if (arrayA !== arrayB) {
//     console.log(
//       `${desc} ... FAIL: ${JSON.stringify(a)} != ${JSON.stringify(b)}`
//     );
//   } else {
//     console.log(`${desc} ... PASS`);
//   }
// }
