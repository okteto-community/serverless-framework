
FROM ghcr.io/jqlang/jq:1.7.1 AS jq

FROM node:22
COPY --from=jq /jq /usr/local/bin/jq
RUN npm i serverless -g