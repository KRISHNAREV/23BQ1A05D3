# Notification Prioritization System

## Priority Order

1. Placement
2. Result
3. Event

## Secondary Sorting

Notifications with the same type are sorted by timestamp in descending order (latest first).

## Algorithm

1. Fetch notifications from API.
2. Assign priority values:
   - Placement = 3
   - Result = 2
   - Event = 1
3. Sort by priority.
4. Sort by timestamp.
5. Return top N notifications.

## Time Complexity

O(n log n)

## Data Source

GET /evaluation-service/notifications